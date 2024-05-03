<script lang="ts">
	import { gibberish } from '$lib/utils';

	let { element = 'bug' }: { element: Elements } = $props();
</script>

<button
	style:--bg-color={gibberish(element)}
	style:--bg-color-hover={gibberish(element, true, true)}
	style:--on-color={gibberish(element, false)}
	style:--on-color-hover={gibberish(element, false, true)}
>
	<span class="text-label-large">
		{element}
	</span>
</button>

<style>
	button {
		background-color: rgb(var(--bg-color));
		color: rgb(var(--on-color));
		@apply inline-flex w-full min-w-[328px] flex-col place-items-center gap-2 rounded-3xl px-4 py-2 capitalize transition-colors;
	}

	button:hover {
		background-color: rgb(var(--bg-color-hover));
		color: rgb(var(--on-color-hover));
	}
</style>
