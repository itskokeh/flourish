export interface BlogPost {
	title: string;
	slug: string;
	content: string;
	excerpt: string;
	author: string;
	published: boolean;
	publishDate: string;
	tags: string[];
	featuredImage: string;
	metaTitle: string;
	metaDescription: string;
	keywords: string[];
}

export interface LabProject {
	title: string;
	slug: string;
	description: string;
	content: string;
	status: string;
	category: string;
	techStack: string[];
	featured: boolean;
	featuredImage: string;
	tags: string[];
	metaTitle?: string;
	metaDescription?: string;
	keywords: string[];
}
