<script lang="ts">
	import { Sun, Moon } from '$lib';
	import { browser } from '$app/environment';

	let currentTheme = 'light';

	if (browser) {
		currentTheme = localStorage.getItem('theme') || 'light';
		window.addEventListener('storage', (e) => {
			if (e.key === 'theme') {
				currentTheme = e.newValue || 'light';
				document.documentElement.classList.toggle(
					'dark',
					currentTheme === 'dark'
				);
			}
		});
	}

	const handleToggle = () => {
		currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
		if (browser) {
			localStorage.setItem('theme', currentTheme);
			document.documentElement.classList.toggle(
				'dark',
				currentTheme === 'dark'
			);
			window.dispatchEvent(new Event('theme-change'));
		}
	};
</script>

<button
	onclick={handleToggle}
	onkeydown={(e) => e.key === 'Enter' && handleToggle()}
	aria-label="Toggle dark mode"
	role="switch"
	aria-checked={currentTheme === 'dark'}
	class="cursor-pointer max-w-8"
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
