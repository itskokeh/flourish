<script lang="ts">
	import { PostCard, ProjectCard } from '$lib';
	import { socialLinks } from '$lib/utils/socialLinks';
	import { compressImage } from '$lib/utils/imageCompressor';

	let { data } = $props();
	let { posts, projects } = data;

	// --- SEO CONFIGURATION ---
	const siteTitle = 'Okechukwu Okeke | Software Engineer & Writer';
	const metaDescription =
		'I’m Okechukwu Okeke (Kokeh). A full-stack software engineer and writer building robust web applications, leading teams, and contributing to open-source.';
	const siteUrl = 'https://www.kokeh.xyz';
	const ogImage = `${siteUrl}/og-image.png`;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Okechukwu Okeke',
		alternateName: 'Kokeh',
		url: siteUrl,
		jobTitle: 'Software Engineer',
		image: ogImage,
		sameAs: socialLinks.map((link) => link.url),
		description: metaDescription,
	};
	const jsonLdString = JSON.stringify(jsonLd);
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content={metaDescription} />
	<link rel="canonical" href={siteUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:image" content={ogImage} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={siteUrl} />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={metaDescription} />
	<meta name="twitter:image" content={ogImage} />

	{@html `<script type="application/ld+json">${jsonLdString}</script>`}
</svelte:head>

<div class="flex flex-col gap-20 pt-8 pb-10">
	<section class="space-y-6">
		<div class="space-y-2">
			<h1
				class="text-6xl sm:text-7xl font-bold text-lightMode-text dark:text-white tracking-tighter"
			>
				Kokeh
			</h1>
			<p
				class="text-xl sm:text-2xl text-lightMode-accent dark:text-darkMode-accent italic"
			>
				Software Engineer & Writer
			</p>
		</div>

		<p class="text-lg leading-relaxed text-opacity-90 max-w-xl">
			I’m Okechukwu Okeke. I build robust full-stack applications and write
			about the engineering behind them. Currently leading teams, contributing
			to open-source, and experimenting with serverless architectures.
		</p>

		<div class="flex gap-5 items-center">
			{#each socialLinks as { url, component: Icon, ariaLabel }}
				<a
					href={url}
					aria-label={ariaLabel}
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-500 hover:text-lightMode-accent dark:text-gray-400 dark:hover:text-darkMode-accent transition-colors duration-200"
				>
					<Icon class="w-6 h-6" />
				</a>
			{/each}
		</div>
	</section>

	<section class="space-y-6">
		<div
			class="flex justify-between items-baseline border-b border-gray-200 dark:border-gray-800 pb-2"
		>
			<h2 class="text-2xl font-bold">Selected Projects</h2>
			<a
				href="/projects"
				class="text-sm font-medium hover:text-lightMode-accent dark:hover:text-darkMode-accent transition-colors"
				>View all →</a
			>
		</div>

		<div class="grid md:grid-cols-2 gap-6">
			{#each projects as project}
				<ProjectCard
					slug={project.slug}
					title={project.title}
					description={project.description}
					techStack={project.techStack}
					tags={project.tags}
					featuredImage={compressImage(project.featuredImage)}
				/>
			{/each}
		</div>
	</section>

	<section class="space-y-6">
		<div
			class="flex justify-between items-baseline border-b border-gray-200 dark:border-gray-800 pb-2"
		>
			<h2 class="text-2xl font-bold">Latest Writing</h2>
			<a
				href="/blog"
				class="text-sm font-medium hover:text-lightMode-accent dark:hover:text-darkMode-accent transition-colors"
				>View all writings→</a
			>
		</div>

		<div class="flex flex-col gap-4">
			{#each posts as post}
				<PostCard
					slug={post.slug}
					title={post.title}
					publishDate={post.publishDate}
					featuredImage={compressImage(post.featuredImage)}
				/>
			{/each}
		</div>
	</section>
</div>
