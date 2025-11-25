<script lang="ts">
	import { navLinks, ThemeToggle } from '$lib';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';

	const isLinkActive = (path: string) => {
		if (path === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(path);
	};
</script>

<!-- TODO: make nav show only icons for mobile view -->
<nav
	class="flex gap-4 p-4 justify-around fixed bottom-0 max-w-3xl w-full border-t border-black/50 bg-lightMode-bg/80 dark:border-gray-700 dark:bg-darkMode-bg/80 backdrop-blur-sm left-1/2 -translate-x-1/2"
>
	{#each navLinks as link}
		<a
			href={link.href}
			transition:fade={{ duration: 150 }}
			class="flex flex-col items-center gap-1 transition-colors
        {isLinkActive(link.href)
				? 'text-green-600 dark:text-green-400'
				: 'text-gray-500 hover:text-green-400 dark:hover:text-gray-100'}"
			aria-label={link.name}
		>
			<link.icon class="w-6 h-6" />
			<span class="hidden sm:block text-xs">{link.name}</span>
		</a>
	{/each}
	<ThemeToggle />
</nav>
