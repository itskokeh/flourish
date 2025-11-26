export const compressImage = (image: string) => {
	const CDN = 'https://wsrv.nl/?url=';
	const result = CDN + image;
	return result;
};
