<script lang="ts">
	import { page } from '$app/state';
	import { Twitter, Email } from '$lib';
</script>

<div class="max-w-md mx-auto p-8 text-center font-sans">
	<h1 class="text-5xl mb-4">Oops!</h1>

	{#if page.status === 404}
		<p class="text-lg leading-relaxed mb-6">
			You just tried to access a page that doesn't exist.
		</p>
		<p class="text-lg leading-relaxed mb-6">
			Was there content here that you liked but has been removed?
		</p>
	{:else}
		<p class="text-lg leading-relaxed mb-6">Something went wrong on our end.</p>
	{/if}
	<!-- TODO add social id to handles -->
	<div class="mt-8">
		<p class=" mb-3">Reach out to me on:</p>
		<div class="flex items-center justify-center gap-1 stro">
			<a
				href="https://twitter.com/yourhandle"
				target="_blank"
				class="flex items-center text-blue-500 font-medium hover:decoration-2 hover:font-bold hover:stroke-3 p-2"
			>
				<Twitter style="w-5 h-5 mr-1" />
				Twitter
			</a>
			<span>or</span>
			<a
				href="mailto:you@example.com"
				class="flex items-center text-blue-500 font-medium hover:decoration-2 hover:font-bold hover:stroke-3 p-2"
			>
				<Email style="w-5 h-5 mr-1" />
				Email
			</a>
		</div>
	</div>
</div>
