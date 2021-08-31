const fs = require('fs');

const filePath = './package.json';

const packageJson = JSON.parse(fs.readFileSync(filePath).toString());
packageJson.buildDate = new Date().getTime();

fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 4));

const jsonData = {
	buildDate: packageJson.buildDate,
};

const jsonContent = JSON.stringify(jsonData);

function onUpdateMetaJson(error) {
	if (error) {
		console.log('An error occured while saving build date and time to meta.json');
		return console.log(error);
	}

	return console.log('Latest build date and time updated in meta.json file');
}

fs.writeFile('./public/meta.json', jsonContent, 'utf8', onUpdateMetaJson);
