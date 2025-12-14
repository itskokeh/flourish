<script lang="ts">
	import { ProjectCard } from '$lib';
	import { compressImage } from '$lib/utils/imageCompressor';
	let { data } = $props();
	let { projects } = data;
</script>

<svelte:head>
	<title>Kokeh - Projects</title>
	<meta
		name="description"
		content="A collection of web applications, open-source tools, and experiments built by Kokeh."
	/>
</svelte:head>

<section class="py-12 sm:py-20 space-y-16">
	<header class="space-y-6 border-b border-gray-200 dark:border-gray-800 pb-10">
		<div class="space-y-2">
			<h1
				class="text-5xl sm:text-6xl font-bold tracking-tight text-lightMode-text dark:text-white"
			>
				Projects
			</h1>
			<p
				class="text-xl text-lightMode-accent dark:text-darkMode-accent italic font-medium"
			>
				Things I've Built
			</p>
		</div>

		<div
			class="max-w-2xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4"
		>
			<p>
				Here you can find a selection of my work. I work on various projects,
				ranging from full-stack web applications to open-source tools and mobile
				experiments.
			</p>
			<p>
				Feel free to explore the code and demos below. If you have any questions
				or feedback, don't hesitate to reach out!
			</p>
		</div>
	</header>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
		{#each projects as project}
			<div
				class="group relative bg-lightMode-card dark:bg-darkMode-card border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
			>
				<ProjectCard
					slug={project.slug}
					title={project.title}
					description={project.description}
					techStack={project.techStack}
					tags={project.tags}
					featuredImage={project.featuredImage}
				/>
			</div>
		{/each}
	</div>
</section>
