<script lang="ts">
	import { page } from '$app/state';
	import X from '$lib/ui/X.svelte';
	import Email from '$lib/ui/Email.svelte';
	import Home from '$lib/ui/Home.svelte';
</script>

<div
	class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4"
>
	<div class="max-w-2xl w-full">
		<!-- Error Code -->
		<div class="text-center mb-8">
			<h1
				class="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
			>
				{page.status === 404 ? '404' : '500'}
			</h1>
			<div
				class="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
			></div>
		</div>

		<!-- Error Message -->
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-800 mb-4">
				{page.status === 404 ? 'Page Not Found' : 'Something Went Wrong'}
			</h2>
			<p class="text-lg text-gray-600 mb-2">
				{#if page.status === 404}
					The page you're looking for seems to have wandered off.
				{:else}
					We're working on fixing this issue.
				{/if}
			</p>
			{#if page.status === 404}
				<p class="text-gray-500">
					Don't worry, even the best explorers get lost sometimes.
				</p>
			{/if}
		</div>

		<!-- CTA Buttons -->
		<div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
			<a
				href="/"
				class="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
			>
				<Home
					class="w-8 h-8 group-hover:rotate-12 transition-transform duration-200"
				/>
				Go to Home
			</a>

			<a
				href="mailto:you@example.com"
				class="group flex items-center justify-center gap-2 bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-purple-300 transform hover:scale-105 transition-all duration-200"
			>
				<Email
					style="w-8 h-8 group-hover:rotate-12 transition-transform duration-200"
				/>
				Send a message
			</a>
		</div>

		<!-- Social Links -->
		<div class="text-center">
			<p class="text-gray-600 mb-4">Or reach out on social media</p>
			<div class="flex gap-4 justify-center">
				<a
					href="https://x.com/itskokeh"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center gap-2 text-black hover:text-gray-800 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
				>
					<X
						class="w-10 h-10 group-hover:scale-110 transition-transform duration-200"
					/>
				</a>

				<a
					href="mailto:kokeh@proton.me"
					class="group flex items-center gap-2 text-black hover:text-gray-800 font-medium px-4 py-2 rounded-lg hover:bg-purple-50 transition-all duration-200"
				>
					<Email
						class="w-10 h-10 group-hover:scale-110 transition-transform duration-200"
					/>
				</a>
			</div>
		</div>

		<!-- Decorative Element -->
		<div class="mt-12 text-center">
			<div class="inline-block animate-bounce">
				<svg
					class="w-8 h-8 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>
