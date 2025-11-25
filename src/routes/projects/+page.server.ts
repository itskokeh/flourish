import { API } from '$lib/api';
import type { LabProject } from '$lib/types';
import type { PageServerLoad } from './$types';

interface ProjectsResponse {
	projects: LabProject[];
}

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch(`${API}/projects`);
	if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`);

	const { projects }: ProjectsResponse = await res.json();

	return { projects };
};
