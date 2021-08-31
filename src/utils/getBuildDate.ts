import dayjs from 'dayjs';

const getBuildDateByEpoch = (epoch: number): string => dayjs(epoch).format('DD/MM/YYYY - HH:mm');

export default getBuildDateByEpoch;
