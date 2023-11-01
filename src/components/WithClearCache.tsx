import { useState, useEffect, FC } from 'react';
import dayjs from 'dayjs';

import packageJson from '../../package.json';

const buildDateGreaterThan = (latestDate: number, currentDate: number) => {
	const momLatestDateTime = dayjs(latestDate);
	const momCurrentDateTime = dayjs(currentDate);

	if (momLatestDateTime.isAfter(momCurrentDateTime)) {
		return true;
	}
	return false;
};

function withClearCache(Component: FC) {
	const ClearCacheComponent: FC = () => {
		const [isLatestBuildDate, setIsLatestBuildDate] = useState(false);

		const refreshCacheAndReload = () => {
			if (caches) {
				// Service worker cache should be cleared with caches.delete()
				caches.keys().then(names => {
					const keys = Object.keys(names);

					for (let index = 0; index < keys.length; index += 1) {
						const element = keys[index];

						caches.delete(element);
					}

					// for (let index of names) {
					// 	caches.delete(name);
					// }
				});
			}
			// delete browser cache and hard reload
			window.location.reload(true);
		};

		useEffect(() => {
			fetch('/meta.json')
				.then(response => response.json())
				.then(meta => {
					const latestVersionDate = meta.buildDate as number;
					const currentVersionDate = Number(packageJson.buildDate);

					const shouldForceRefresh = buildDateGreaterThan(latestVersionDate, currentVersionDate);

					if (shouldForceRefresh) {
						setIsLatestBuildDate(false);

						refreshCacheAndReload();
					} else {
						setIsLatestBuildDate(true);
					}
				})
				.catch(err => {
					console.error('Could not retrieve the latest build information');
					console.error(err);
					setIsLatestBuildDate(true);
				});
		}, []);

		return <>{isLatestBuildDate ? <Component /> : null}</>;
	};

	return ClearCacheComponent;
}

export default withClearCache;
