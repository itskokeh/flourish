import { Blog, Home, Projects } from '$lib';

interface NavLink {
	name: string;
	href: string;
	icon: any;
}

export const navLinks: NavLink[] = [
	{ name: 'Home', href: '/', icon: Home },
	{ name: 'Blog', href: '/blog', icon: Blog },
	{ name: 'Projects', href: '/projects', icon: Projects },
] as const;
