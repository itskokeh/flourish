<script lang="ts">
	import { Linkedin } from '@lucide/svelte';
	export let style = '';
</script>

<Linkedin
	class={`cursor-pointer dark:hover:text-blue-400 hover:text-blue-600 ${style}`}
	aria-label="LinkedIn Icon"
/>
