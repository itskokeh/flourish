import { marked } from 'marked';
import { API } from '$lib/api';
import type { LabProject } from '$lib/types';
import type { PageServerLoad } from './$types';

interface ProjectResponse {
	project: LabProject;
}

export const load: PageServerLoad = async ({ fetch, params }) => {
	const { slug } = params;
	const res = await fetch(`${API}/projects/${slug}`);
	if (!res.ok) {
		throw new Error(`Failed to fetch project: ${res.status}`);
	}

	const { project }: ProjectResponse = await res.json();
	let htmlContent: string;
	try {
		htmlContent = await marked.parse(project.content);
	} catch (error) {
		console.error('Markdown parse failed', error);
		htmlContent = '<p>Error loading Content.</p>';
	}
	return {
		project,
		htmlContent,
	};
};
