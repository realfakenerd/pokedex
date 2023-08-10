<script lang="ts">
	import { goto } from '$app/navigation';
	import PokePill from '$lib/components/cards/PokePill.svelte';
	import Icon from '$lib/elements/Icon.svelte';
	import { gibberish } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
	const { pokemon, streamed } = data;
	const id = pokemon.id;
	let img: HTMLImageElement;
	let naturalWidth: number;
	let naturalHeight: number;

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
			<button on:click={() => goto('/')}>
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
			</button>
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
		<figure in:fade={{ duration: 200, delay: 200 }}>
			<img
				src="https://projectpokemon.org/images/normal-sprite/{pokemon.name}.gif"
				bind:this={img}
				bind:naturalWidth
				bind:naturalHeight
				width={naturalWidth * 2}
				height={naturalHeight * 2}
				alt="{pokemon.name} gif"
				loading="eager"
			/>
		</figure>
	</header>

	<main class="infodata-section">
		<hgroup>
			<h1 class="text-headline-large capitalize">{pokemon.name}</h1>
			<h2 class="text-label-large">Nº {id < 100 ? (id < 10 ? `00${id}` : `0${id}`) : id}</h2>
			<h3 class="text-label-large">
				{#await streamed.characteristic}
					loading...
				{:then characteristic}
					{@const description = characteristic.descriptions.find(
						(d) => d.language.name === 'en'
					)?.description}
					{description}
				{:catch}
					failled do load :(
				{/await}
			</h3>
		</hgroup>
		<div class="inline-flex w-full items-start justify-start gap-1">
			<PokePill class="min-w-[86px] p-1 px-3.5" pokemontypes={pokemon.types[0].type.name} />
			{#if pokemon.types.length > 1}
				<div
					style="display: contents;"
					style:--bg-color={gibberish(pokemon.types[1].type.name, true, false)}
					style:--bg-color-hover={gibberish(pokemon.types[1].type.name, true, true)}
					style:--on-color={gibberish(pokemon.types[1].type.name, false, false)}
					style:--on-color-hover={gibberish(pokemon.types[1].type.name, false, true)}
				>
					<PokePill
						class="w-full max-w-[108px] p-1 px-3.5"
						pokemontypes={pokemon.types[1].type.name}
					/>
				</div>
			{/if}
		</div>
		<section class="flex flex-col gap-10">
			<div class="flex flex-col gap-5">
				<div class="fill-on-surface inline-flex w-full gap-5">
					<div class="flex w-full flex-col gap-1">
						<span class="text-label-medium inline-flex items-center gap-1.5 uppercase">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
								<path
									d="M8 2.5C7.1775 2.5 6.5 3.1775 6.5 4C6.5 4.176 6.537 4.342 6.594 4.5H4.094L4.0155 4.9065L2.5155 12.4065L2.5 12.453V13.5H13.5V12.453L13.4845 12.4065L11.9845 4.9065L11.906 4.5H9.406C9.46606 4.34004 9.49786 4.17085 9.5 4C9.5 3.1775 8.8225 2.5 8 2.5ZM8 3.5C8.2815 3.5 8.5 3.719 8.5 4C8.5 4.2815 8.281 4.5 8 4.5C7.7185 4.5 7.5 4.281 7.5 4C7.5 3.7185 7.719 3.5 8 3.5ZM4.906 5.5H11.094L12.5 12.5H3.5L4.906 5.5Z"
								/>
							</svg>
							weight
						</span>
						<span class="text-title-medium flex w-full justify-center p-2"
							>{(pokemon.weight * 0.1).toFixed(1)} kg</span
						>
					</div>
					<div class="flex w-full flex-col gap-1">
						<span class="text-label-medium inline-flex items-center gap-1.5 uppercase">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
								<path
									d="M13.125 13.062H2.875C2.80625 13.062 2.75 13.1183 2.75 13.187L2.75 14.1245C2.75 14.1933 2.80625 14.2495 2.875 14.2495H13.125C13.1938 14.2495 13.25 14.1933 13.25 14.1245V13.187C13.25 13.1183 13.1938 13.062 13.125 13.062ZM13.125 1.74951L2.875 1.74951C2.80625 1.74951 2.75 1.80576 2.75 1.87451V2.81201C2.75 2.88076 2.80625 2.93701 2.875 2.93701L13.125 2.93701C13.1938 2.93701 13.25 2.88076 13.25 2.81201V1.87451C13.25 1.80576 13.1938 1.74951 13.125 1.74951ZM9.54375 5.90576C9.6375 5.90576 9.69063 5.79639 9.63281 5.72295L8.05781 3.7292C8.04739 3.71571 8.03401 3.70478 8.01871 3.69727C8.0034 3.68975 7.98658 3.68585 7.96953 3.68585C7.95248 3.68585 7.93566 3.68975 7.92036 3.69727C7.90505 3.70478 7.89167 3.71571 7.88125 3.7292L6.30625 5.72295C6.29313 5.73963 6.28497 5.75967 6.28271 5.78077C6.28046 5.80188 6.28419 5.82319 6.29348 5.84227C6.30278 5.86135 6.31726 5.87743 6.33527 5.88865C6.35328 5.89988 6.37409 5.90581 6.39531 5.90576H7.4375L7.4375 10.0933H6.45625C6.3625 10.0933 6.30938 10.2026 6.36719 10.2761L7.94219 12.2683C7.9875 12.3261 8.075 12.3261 8.11875 12.2683L9.69375 10.2761C9.75156 10.2026 9.7 10.0933 9.60469 10.0933H8.5625V5.90576H9.54375Z"
								/>
							</svg>
							height
						</span>
						<span class="text-title-medium flex w-full justify-center p-2"
							>{(pokemon.height * 0.1).toFixed(1)} m</span
						>
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
