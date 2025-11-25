import { API } from '$lib/api';
import type { BlogPost } from '$lib/types';
import type { PageServerLoad } from './$types';

interface PostsResponse {
	posts: BlogPost[];
}

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch(`${API}/posts`);
	if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);

	const { posts }: PostsResponse = await res.json();

	return { posts };
};
