<script lang="ts">
	import { ProjectCard } from '$lib';
	let { data } = $props();
	let { projects } = data;
</script>

<svelte:head>
	<title>Kokeh - Projects</title>
</svelte:head>

<section>
	<div class="mb-4">
		<h1 class="text-2xl font-extrabold">Projects</h1>
		<p class="-mt-0.5">Things I've Built</p>
	</div>
	<div class="flex flex-col gap-4">
		<!-- TODO: Add a list of projects here with links and descriptions. -->
		<p>
			Here you can find a list of my projects. I have worked on various
			projects, including web applications, mobile apps, and open-source
			contributions.
		</p>
		<p>
			Feel free to explore the projects below, and if you have any questions or
			feedback, don't hesitate to reach out!
		</p>
	</div>
	<section class="grid grid-cols-1 mt-4 mb-4 gap-8">
		{#each projects as project}
			<ProjectCard
				slug={project.slug}
				title={project.title}
				excerpt={project.excerpt}
				tags={project.tags}
				publishDate={project.publishDate}
				featuredImage={project.featuredImage}
			/>
		{/each}
	</section>
</section>
