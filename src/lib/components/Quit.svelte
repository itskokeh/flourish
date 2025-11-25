<div class="max-w-2xl mx-auto p-4">
	<div class="text-left mb-4 p-2">
		<h2 class="text-2xl font-bold animate-bounce">Kokeh</h2>
		<p class="italic mt-[-0.5rem]">Product Engineer</p>
	</div>
	<section class="border-2 p-4 rounded-lg border-dark dark:border-gray-700">
		<h2 class="text-lg font-bold mb-4">About Me</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere
			vitae iure aperiam necessitatibus nemo nam, veniam tempora quas porro!
			Perferendis ullam explicabo distinctio quo praesentium consequuntur esse
			saepe quisquam.
		</p>
		<div class="flex mt-6 mb-2 gap-3 items-center">
			<GitHub style="w-5 h-5" />
			<Twitter style="w-5 h-5" />
			<LinkedIn style="w-5 h-5" />
			<Email style="w-5 h-5" />
		</div>
	</section>
	<section class="flex flex-col gap-4 mt-4">
		<div class="flex justify-between items-center">
			<h2 class="text-lg font-bold">Featured Projects</h2>
			<a href="/projects" class="hover:underline">View all</a>
		</div>
		<div class="border-2 p-4 rounded-lg border-dark dark:border-gray-700">
			<a href="/projects/ecommerce-platform" class="text-lg font-bold"
				>Ecommerce Platform</a
			>
			<p>Something I have built</p>
			<div class="flex flex-wrap gap-2 mt-2 items-center text-sm">
				<span class="design">React</span>
				<span class="design">React Query</span>
				<span class="design">Zustand</span>
			</div>
		</div>
		<div class="border-2 p-4 rounded-lg border-dark dark:border-gray-700">
			<!-- TODO add Image before title/link make image interactive -->
			<a href="/projects/citrus-runner" class="text-lg font-bold"
				>Ecommerce Platform</a
			>
			<p class="mt-4">Something I have built</p>
			<div class="flex flex-wrap gap-2 items-center mt-6 text-sm">
				<span class="design">React</span>
				<span class="design">React Query</span>
				<span class="design">Zustand</span>
			</div>
		</div>
	</section>
	<section class="flex flex-col gap-4 mt-4 mb-4">
		<div class="flex justify-between items-center">
			<h2 class="text-lg font-bold">Latest Posts</h2>
			<a href="/blog" class="hover:underline">View all</a>
		</div>
		<!-- TODO make this dynamic so that the data loads automatically -->
		<div class="border-2 p-4 rounded-lg border-dark dark:border-gray-700">
			<a href="/blog/{blogSlug()}" class="font-bold text-lg"
				>Why I chose Svelte for my blog</a
			>
			<p class="text-sm mt-1.5 mb-4">
				<span class="mr-2">{date}</span>•<span class="ml-2">15 min read</span>
			</p>
			<p>
				A complete rundown of reasons why I chose Svelte and SvelteKit over
				Astro, Nextjs etc
			</p>
			<div class="flex flex-wrap gap-2 items-center mt-6 text-sm">
				<span class="design">Web Development</span>
				<span class="design">SvelteKit</span>
				<span class="design">Tailwind</span>
				<span class="design">Typescript</span>
			</div>
		</div>
	</section>
	<!-- TODO for playing -->
	<button
		class="p-2 bg-green-400 rounded-md cursor-pointer text-dark hover:bg-green-500 transition-colors"
		onclick={updateTitle}>Reset Title</button
	>
	<input
		type="text"
		class="rounded-md dark:border-light border-dark border-1 p-2"
		bind:value={title}
	/>
</div>