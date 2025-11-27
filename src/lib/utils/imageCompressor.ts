export const compressImage = (image: string, width: number = 800, height: number = 600) => {
	const CDN = 'https://wsrv.nl/?url=';
	const w = `&w=${width}`;
	const h = `&h=${height}`;
	const result = CDN + image + w + h;
	return result;
};
