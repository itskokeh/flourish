<script lang="ts">
	import { Twitter } from '@lucide/svelte';
	export let style = '';
</script>

<Twitter
	class={`cursor-pointer dark:hover:text-blue-400 hover:text-blue-600 ${style}`}
	aria-label="Twitter Icon"
/>
