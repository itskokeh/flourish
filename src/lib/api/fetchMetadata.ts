import type { BlogPost, LabProject } from '../types';
import { API } from './';

interface PostsResponse {
	posts: BlogPost[];
}

interface ProjectsResponse {
	projects: LabProject[];
}

export const getPostMetadata = async () => {
	const res = await fetch(`${API}/posts`);
	if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);

	const { posts }: PostsResponse = await res.json();
	return { posts };
};

export const getProjectMetadata = async () => {
	const res = await fetch(`${API}/projects`);
	if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`);

	const { projects }: ProjectsResponse = await res.json();
	return { projects };
};
