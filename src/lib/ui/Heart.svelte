<script lang="ts">
	import { Heart } from '@lucide/svelte';
	export let style = '';
</script>

<Heart
	class={`cursor-pointer ${style}`}
	aria-label="Twitter Icon"
	fill="red"
	color="red"
/>
