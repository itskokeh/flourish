<script lang="ts">
	import Icon from '@iconify/svelte';
	import house from '@iconify-icons/noto/house';
	type Props = {
		[key: string]: any;
	};
	let { ...rest }: Props = $props();
</script>

<Icon icon={house} {...rest} />
