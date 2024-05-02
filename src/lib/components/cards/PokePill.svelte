<script lang="ts">
	import Icon from '$lib/elements/Icon.svelte';
	import { gibberish } from '$lib/utils';

	let { pokemontypes, class: className }: { class?: string; pokemontypes: Elements } = $props();
</script>

<section
	style:--bg-color={gibberish(pokemontypes, true, false)}
	style:--on-color={gibberish(pokemontypes, false, false)}
	class="pokepill {className ?? ''}"
>
	<figure>
		<Icon name={pokemontypes} />
	</figure>
	<span>
		{pokemontypes}
	</span>
</section>

<style>
	.pokepill {
		background-color: rgb(var(--bg-color));
		color: rgb(var(--on-color));
		@apply inline-flex items-center gap-2 rounded-full;
	}

	.pokepill figure {
		@apply bg-surface-variant inline-flex h-7 w-7 items-center justify-center rounded-full p-1;
	}

	.pokepill span {
		@apply text-label-small capitalize;
	}
</style>
