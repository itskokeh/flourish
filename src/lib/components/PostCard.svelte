<script lang="ts">
	let { slug, title, publishDate, featuredImage } = $props();
</script>

<div
	class="flex border-0 rounded-md hover:shadow-lg transition-shadow duration-300 hover:dark:bg-darkMode-card hover:bg-lightMode-card h-24 bg-inherit sm:p-4"
>
	<a href={`blog/${slug}`} class="flex w-full">
		<img
			src={featuredImage}
			alt="Post Avatar"
			fetchpriority="high"
			loading="eager"
			style="object-fit: cover;"
			class="aspect-[4/5] sm:h-full h-8/10 w-24"
		/>
		<div class="flex flex-col sm:gap-2 sm:pl-3 pl-2 h-full">
			<h2 class="dark:text-yellow-400 sm:text-xl text-lg">
				{title}
			</h2>
			<p class="text-xs">{publishDate}</p>
		</div>
	</a>
</div>
