<script lang="ts">
	import { Sun, Moon } from '$lib';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let currentTheme = $state('light');

	onMount(() => {
		if (browser) {
			currentTheme = localStorage.getItem('theme') || 'light';
			document.documentElement.classList.toggle(
				'dark',
				currentTheme === 'dark',
			);

			const handleStorage = (e: StorageEvent) => {
				if (e.key === 'theme') {
					currentTheme = e.newValue || 'light';
					document.documentElement.classList.toggle(
						'dark',
						currentTheme === 'dark',
					);
				}
			};

			window.addEventListener('storage', handleStorage);
			return () => window.removeEventListener('storage', handleStorage);
		}
	});

	const handleToggle = () => {
		currentTheme = currentTheme === 'dark' ? 'light' : 'dark';

		if (browser) {
			localStorage.setItem('theme', currentTheme);
			document.documentElement.classList.toggle(
				'dark',
				currentTheme === 'dark',
			);
		}
	};
</script>

<button
	onclick={handleToggle}
	onkeydown={(e) => e.key === 'Enter' && handleToggle()}
	aria-label="Toggle dark mode"
	role="switch"
	aria-checked={currentTheme === 'dark'}
	class="cursor-pointer max-w-8 hover:text-lightMode-accent dark:hover:text-darkMode-accent transition-colors"
	title={currentTheme === 'dark'
		? 'Switch to light mode'
		: 'Switch to dark mode'}
>
	{#if currentTheme === 'dark'}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>
