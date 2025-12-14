import type { Component } from 'svelte';
import { Email, GitHub, GoodReads, LinkedIn, X } from '$lib/ui';

type socialLink = {
	name: string;
	url: string;
	component: Component;
	ariaLabel: string;
};
export const socialLinks: socialLink[] = [
	{
		name: 'GitHub',
		url: 'https://github.com/itskokeh',
		component: GitHub,
		ariaLabel: 'Visit my GitHub profile',
	},
	{
		name: 'X',
		url: 'https://x.com/itskokeh',
		component: X,
		ariaLabel: 'Visit my X (Twitter) profile',
	},
	{
		name: 'Email',
		url: 'mailto:kokeh@proton.me',
		component: Email,
		ariaLabel: 'Contact Me',
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/itskokeh',
		component: LinkedIn,
		ariaLabel: 'Visit my LinkedIn profile',
	},
	{
		name: 'Goodreads',
		url: 'https://goodreads.com/itskokeh',
		component: GoodReads,
		ariaLabel: 'Visit my Goodreads profile',
	},
];
