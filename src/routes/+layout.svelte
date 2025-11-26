<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { Footer, Navbar } from '$lib';
	if (browser) {
		const syncTheme = () => {
			const theme = localStorage.getItem('theme');
			document.documentElement.classList.toggle('dark', theme === 'dark');
		};

		window.addEventListener('storage', (e) => {
			if (e.key === 'theme') syncTheme();
		});
	}

	let { children } = $props();
</script>

<svelte:head>
	<title>Kokeh</title>
	<link rel="preconnect" href="https://wsrv.nl" />
	<link rel="preconnect" href="https://api.kokeh.xyz" />
</svelte:head>

<div class="min-h-screen max-w-3xl flex flex-col m-auto">
	<main class="flex-grow p-4">
		{@render children()}
	</main>
	<Footer />
	<Navbar />
</div>
