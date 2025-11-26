<!-- <script lang="ts">
	let title = $state('Flourish');
</script> -->

<svelte:head>
	<title>Kokeh</title>
	<link
		rel="preload"
		as="image"
		href="/theme-script.webp"
		fetchpriority="high"
	/>
</svelte:head>

<section class="max-w-3xl flex flex-col gap-4 mx-auto">
	<div class="flex flex-col justify-center items-center">
		<img
			src="/theme-script.webp"
			alt="Screenshot of an app interface"
			class="object-contain sm:w-6/10 w-full mb-4"
			fetchpriority="high"
			loading="eager"
		/>
		<h2 class="animate-pulse">Kokeh</h2>
		<p class="italic">Software Engineer</p>
		<p class="self-center mt-4">
			I’m Okechukwu Okeke, a full-stack JavaScript developer who builds
			web applications and writes technical content. I lead both frontend and
			backend teams, contribute to open-source projects, and experiment with
			privacy-aware tools and serverless architectures. My work focuses on
			practical problem-solving, clean engineering, and sharing what I learn.
		</p>
	</div>

	<section>
		<div class="flex justify-between">
			<h3>View my Projects</h3>
			<a href="/projects" class="hover:underline">View all</a>
		</div>
		<div>
			<!-- TODO: dynamically render content here with a list and conditionals -->
		</div>
	</section>
	<section>
		<div class="flex justify-between">
			<h3>Read my Blog</h3>
			<a href="/blog" class="hover:underline">View all</a>
		</div>
		<div>
			<!-- TODO: dynamically render content here with a list and conditionals -->
		</div>
	</section>
</section>
