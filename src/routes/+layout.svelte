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
	<link
		rel="preload"
		href="/fonts/TestTiemposText-Regular-BF66457a50cd521.otf"
		as="font"
		type="font/otf"
	/>
	<link
		rel="preload"
		href="/fonts/TestTiemposText-RegularItalic-BF66457a50421c2.otf"
		as="font"
		type="font/otf"
	/>
	<link
		rel="preload"
		href="/fonts/TestTiemposHeadline-Bold-BF66457a5113d17.otf"
		as="font"
		type="font/otf"
	/>
</svelte:head>

<div class="min-h-screen max-w-3xl flex flex-col m-auto">
	<main class="flex-grow p-4">
		{@render children()}
	</main>
	<Footer />
	<Navbar />
</div>
