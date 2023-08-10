<script lang="ts">
	import Icon from '$lib/elements/Icon.svelte';
	import { fade } from 'svelte/transition';

	export let pokemontypes: Elements;
</script>

<section in:fade={{ duration: 300, delay: 250 }} class="pokepill {$$props.class??''}">
	<div>
		<figure>
			<Icon name={pokemontypes} />
		</figure>
		<span>
			{pokemontypes}
		</span>
	</div>
</section>

<style>
	.pokepill {
		background-color: rgb(var(--bg-color));
		color: rgb(var(--on-color));
		@apply inline-flex rounded-full ;
	}

	.pokepill > div {
		@apply inline-flex items-center gap-2;
	}

	.pokepill figure {
		@apply bg-surface-variant inline-flex h-7 w-7 items-center justify-center rounded-full p-1;
	}

	.pokepill span {
		@apply text-label-small capitalize;
	}
</style>
