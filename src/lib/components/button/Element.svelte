<script lang="ts">
	let { element = 'bug' }: { element: Elements } = $props();

	function gibberish(bg = true, hover = false) {
		if (bg) {
			if (hover) return `var(--color-${element}-container-hover)`;
			return `var(--color-${element}-container)`;
		}

		if (hover) return `var(--color-on-${element}-container-hover)`;
		return `var(--color-on-${element}-container)`;
	}
</script>

<button
	style:--bg-color={gibberish()}
	style:--bg-color-hover={gibberish(true, true)}
	style:--on-color={gibberish(false)}
	style:--on-color-hover={gibberish(false, true)}
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
