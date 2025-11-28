import { getPostMetadata, getProjectMetadata } from '$lib/api';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	try {
		const [posts, projects] = await Promise.all([getPostMetadata(), getProjectMetadata()]);
		return { posts, projects };
	} catch (err) {
		const errorMessage = (err as Error).message;
		console.error('Error', errorMessage);
		return { posts: [], projects: [] };
	}
};
