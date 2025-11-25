import { marked } from 'marked';
import { API } from '$lib/api';
import type { BlogPost } from '$lib/types';
import type { PageServerLoad } from './$types';

interface PostResponse {
	post: BlogPost;
}

export const load: PageServerLoad = async ({ fetch, params, setHeaders }) => {
	const { slug } = params;
	const res = await fetch(`${API}/posts/${slug}`);
	if (!res.ok) {
		throw new Error(`Failed to fetch blog: ${res.status}`);
	}

	const { post }: PostResponse = await res.json();
	let htmlContent: string;
	try {
		htmlContent = await marked.parse(post.content);
	} catch (error) {
		console.error('Markdown parse failed', error);
		htmlContent = '<p>Error loading Content.</p>';
	}
	setHeaders({ 'cache-control': 'public, max-age=300, s-maxage=3600' });

	return {
		post,
		htmlContent,
	};
};
