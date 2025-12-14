import type { Component } from 'svelte';
import { Blog, Home, Projects } from '$lib';

interface NavLink {
	name: string;
	href: string;
	icon: Component;
}

export const navLinks: NavLink[] = [
	{ name: 'Home', href: '/', icon: Home },
	{ name: 'Blog', href: '/blog', icon: Blog },
	{ name: 'Projects', href: '/projects', icon: Projects },
] as const;
