<script lang="ts">
	import Icon from '$lib/elements/Icon.svelte';
	import { gibberish } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	const { pokemon } = data;
	const id = pokemon.id;

	const icon = pokemon.sprites.versions?.['generation-vii'].icons.front_default;
	const pokemontypes = pokemon.types[0].type.name;

	console.log(pokemon);

</script>

<svelte:head>
	<title>{pokemon.name.toUpperCase()}</title>
	<link rel="shortcut icon" href={icon} />
</svelte:head>

<div
	class="flex flex-col gap-5"
	style:--bg-color={gibberish(pokemontypes)}
	style:--bg-color-hover={gibberish(pokemontypes, true, true)}
	style:--on-color={gibberish(pokemontypes, false)}
	style:--on-color-hover={gibberish(pokemontypes, false, true)}
>
	<header>
		<section class="buttons-section">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="38"
				height="38"
				viewBox="0 0 38 38"
				fill="none"
			>
				<path
					d="M22.168 12.6665L15.8346 18.9998L22.168 25.3332"
					stroke="white"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 28 28"
				fill="none"
			>
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

	<main class="infodata-section">
		<hgroup>
			<h1 class="text-headline-large capitalize">{pokemon.name}</h1>
			<h2 class="text-label-large">Nº {id < 100 ? (id < 10 ? `00${id}` : `0${id}`) : id}</h2>
		</hgroup>
		<div class="inline-flex w-full items-start justify-start gap-1">
			<section class="pokepill">
				<div>
					<figure>
						<Icon name={pokemontypes} />
					</figure>
					<span>
						{pokemontypes}
					</span>
				</div>
			</section>
			{#if pokemontypes.length > 1}
				<section
					style:--bg-color={gibberish(pokemon.types[1].type.name, true, false)}
					style:--bg-color-hover={gibberish(pokemon.types[1].type.name, true, true)}
					style:--on-color={gibberish(pokemon.types[1].type.name, false, false)}
					style:--on-color-hover={gibberish(pokemon.types[1].type.name, false, true)}
					class="pokepill"
				>
					<div>
						<figure>
							<Icon name={pokemon.types[1].type.name} />
						</figure>
						<span>
							{pokemon.types[1].type.name}
						</span>
					</div>
				</section>
			{/if}
		</div>
		<section class="flex flex-col gap-10">
			<div class="flex flex-col gap-5">
				<div class="inline-flex gap-5 w-full">
					<div class="flex flex-col gap-1 w-full">
						<span class="text-label-medium uppercase">weight</span>
						<span class="text-title-medium w-full p-2 flex justify-center">{pokemon.weight * 0.1} kg</span>
					</div>
					<div class="flex flex-col gap-1 w-full">
						<span class="text-label-medium uppercase">height</span>
						<span class="text-title-medium w-full p-2 flex justify-center">{(pokemon.height * 0.1).toPrecision(1)} m</span>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>

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

	.infodata-section {
		@apply flex flex-col gap-6 px-4;
	}

	.infodata-section hgroup {
		@apply flex flex-col;
	}

	.pokepill {
		background-color: rgb(var(--bg-color));
		color: rgb(var(--on-color));
		@apply inline-flex w-1/2 rounded-full px-1.5 py-1;
	}

	.pokepill > div {
		@apply inline-flex items-center gap-1.5;
	}

	.pokepill figure {
		@apply bg-inverse-surface inline-flex rounded-full p-1;
	}

	.pokepill span {
		@apply text-label-small capitalize;
	}
</style>
