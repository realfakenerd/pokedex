<script lang="ts">
	import Icon from '$lib/elements/Icon.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { pokemon } = data;

	console.log(pokemon);
	const icon = pokemon.sprites.versions?.['generation-vii'].icons.front_default;

	function gibberish(bg = true, hover = false, pokeslot = 0) {
		if (bg) {
			if (hover) return `var(--color-${pokemon.types[pokeslot].type.name}-hover)`;
			return `var(--color-${pokemon.types[pokeslot].type.name})`;
		}

		if (hover) return `var(--color-on-${pokemon.types[pokeslot].type.name}-hover)`;
		return `var(--color-on-${pokemon.types[pokeslot].type.name})`;
	}
</script>

<svelte:head>
	<title>{pokemon.name.toUpperCase()}</title>
	<link rel="shortcut icon" href={icon} />
</svelte:head>

<header
	style:--bg-color={gibberish()}
	style:--bg-color-hover={gibberish(true, true)}
	style:--on-color={gibberish(false)}
	style:--on-color-hover={gibberish(false, true)}
>
	<section class="buttons-section">
		<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
			<path
				d="M22.168 12.6665L15.8346 18.9998L22.168 25.3332"
				stroke="white"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
			<path
				d="M24.3151 5.37802C23.7192 4.78186 23.0117 4.30894 22.233 3.98629C21.4543 3.66363 20.6197 3.49756 19.7768 3.49756C18.9339 3.49756 18.0992 3.66363 17.3205 3.98629C16.5418 4.30894 15.8343 4.78186 15.2384 5.37802L14.0018 6.61469L12.7651 5.37802C11.5615 4.17438 9.92897 3.49818 8.22677 3.49818C6.52456 3.49818 4.89207 4.17438 3.68843 5.37802C2.48479 6.58166 1.80859 8.21415 1.80859 9.91636C1.80859 11.6186 2.48479 13.251 3.68843 14.4547L4.9251 15.6914L14.0018 24.768L23.0784 15.6914L24.3151 14.4547C24.9113 13.8588 25.3842 13.1513 25.7068 12.3726C26.0295 11.5939 26.1956 10.7593 26.1956 9.91636C26.1956 9.07345 26.0295 8.23881 25.7068 7.46011C25.3842 6.68141 24.9113 5.9739 24.3151 5.37802V5.37802Z"
				stroke="white"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</section>

	<section class="header-background">
		<div>
			<Icon width={204} height={204} fill="#ccc" name={pokemon.types[0].type.name} />
		</div>
	</section>
	<figure>
		<img
			width="142"
			height="153"
			src="https://projectpokemon.org/images/normal-sprite/{pokemon.name}.gif"
			alt="{pokemon.name} gif"
		/>
	</figure>
</header>

<style>
	header {
		@apply relative flex min-h-[308px] w-full flex-col items-center justify-between overflow-hidden;
	}

	header img {
		image-rendering: pixelated;
		image-resolution: from-image 300dpi;
	}

	.header-background {
		background-color: rgb(var(--bg-color));
		color: rgb(var(--on-color));
		@apply absolute bottom-[10%] -z-20 h-[500px] w-[500px] rounded-full;
	}

	.header-background div {
		@apply absolute bottom-[5%] left-1/2 -z-10 -translate-x-1/2 transform;
	}

	.buttons-section {
		@apply inline-flex w-full items-center justify-between pl-4 pr-8 pt-5;
	}
</style>
