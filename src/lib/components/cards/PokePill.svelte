<script lang="ts">
	import Icon from '$lib/elements/Icon.svelte';
	import { gibberish } from '$lib/utils';

	export let pokemontypes: Elements;
</script>

<section
	style:--bg-color={gibberish(pokemontypes, true, false)}
	style:--on-color={gibberish(pokemontypes, false, false)}
	class="pokepill {$$props.class ?? ''}"
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
		@apply inline-flex rounded-full items-center gap-2;
	}

	.pokepill figure {
		@apply bg-surface-variant inline-flex h-7 w-7 items-center justify-center rounded-full p-1;
	}

	.pokepill span {
		@apply text-label-small capitalize;
	}
</style>
