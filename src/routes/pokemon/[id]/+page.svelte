<script lang="ts">
	import PokePill from '$lib/components/cards/PokePill.svelte';
	import PokeStat from '$lib/components/cards/PokeStat.svelte';
	import Icon from '$lib/elements/Icon.svelte';
	import { gibberish } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';
	import Species from '$lib/components/Species.svelte';
	export let data: PageData;
	const { pokemon, streamed } = data;
	const id = pokemon.id;
	let img: HTMLImageElement;
	let naturalWidth: number;
	let naturalHeight: number;

	const icon = pokemon.sprites?.versions?.['generation-vii'].icons.front_default;
	const pokemontypes = pokemon.types[0].type.name;

	console.log(data);
</script>

<svelte:head>
	<link rel="shortcut icon" href={icon} />
	<title>{pokemon.name.toUpperCase()}</title>
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="og:title" content={pokemon.name.toUpperCase()} />
	<meta property="description" content="{pokemon.name} name" />
	<meta property="og:description" content="{pokemon.name} name" />
	<meta property="og:url" content="https://supremepokedex.vercel.app/pokemon/{pokemon.name}" />
	<meta property="og:image" content={pokemon.sprites.other?.['official-artwork'].front_default} />
	<link
		rel="prefetch"
		as="image"
		href="https://projectpokemon.org/images/normal-sprite/{pokemon.name}.gif"
	/>
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
			<button on:click={() => history.back()}>
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
				<Icon
					fill="rgb(var(--color-surface))"
					width={204}
					height={204}
					name={pokemon.types[0].type.name}
				/>
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
					loading characteristic...
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
				<PokePill
					class="w-full max-w-[108px] p-1 px-3.5"
					pokemontypes={pokemon.types[1].type.name}
				/>
			{/if}
		</div>
		<section class="text-body-medium">
			{#await streamed.specie}
				loading...
			{:then specie}
				{specie.flavor_text_entries[0]?.flavor_text.replace(/\f/g, ' ')}
			{/await}
		</section>
		<section class="mb-10 flex flex-col gap-5">
			<div class="fill-on-surface inline-flex w-full gap-5">
				<div class="flex w-full flex-col gap-1">
					<span class="text-label-medium inline-flex items-center gap-1.5 uppercase">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path
								d="M8 2.5c-.82 0-1.5.68-1.5 1.5 0 .18.04.34.1.5H4.1l-.08.4-1.5 7.5-.02.05v1.05h11v-1.05l-.02-.04-1.5-7.5-.07-.41H9.4a1.5 1.5 0 0 0-1.4-2Zm0 1c.28 0 .5.22.5.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5c0-.28.22-.5.5-.5Zm-3.1 2h6.2l1.4 7h-9l1.4-7Z"
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
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path
								d="M13.13 13.06H2.87a.13.13 0 0 0-.12.13v.93c0 .07.06.13.13.13h10.25c.06 0 .12-.06.12-.13v-.93a.13.13 0 0 0-.13-.13Zm0-11.31H2.87a.13.13 0 0 0-.12.12v.94c0 .07.06.13.13.13h10.25c.06 0 .12-.06.12-.13v-.94a.13.13 0 0 0-.13-.12ZM9.54 5.91c.1 0 .15-.11.1-.19l-1.58-2a.11.11 0 0 0-.18 0l-1.57 2a.11.11 0 0 0 .09.19h1.04v4.18h-.98c-.1 0-.15.11-.1.19l1.58 1.99c.05.06.13.06.18 0l1.57-2a.11.11 0 0 0-.09-.18H8.56V5.91h.98Z"
							/>
						</svg>
						height
					</span>
					<span class="text-title-medium flex w-full justify-center p-2"
						>{(pokemon.height * 0.1).toFixed(1)} m</span
					>
				</div>
			</div>
			{#await streamed.specie then specie}
				<div class="fill-on-surface inline-flex w-full gap-5 capitalize">
					<div class="flex w-full flex-col gap-1">
						<span class="text-label-medium inline-flex items-center gap-1.5 uppercase">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
								<path
									d="M8 2.5c-.82 0-1.5.68-1.5 1.5 0 .18.04.34.1.5H4.1l-.08.4-1.5 7.5-.02.05v1.05h11v-1.05l-.02-.04-1.5-7.5-.07-.41H9.4a1.5 1.5 0 0 0-1.4-2Zm0 1c.28 0 .5.22.5.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5c0-.28.22-.5.5-.5Zm-3.1 2h6.2l1.4 7h-9l1.4-7Z"
								/>
							</svg>
							Shape
						</span>
						<span class="text-title-medium flex w-full justify-center p-2">
							{specie.shape.name}
						</span>
					</div>
					<div class="flex w-full flex-col gap-1">
						<span class="text-label-medium inline-flex items-center gap-1.5 uppercase">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
								<path
									d="M13.13 13.06H2.87a.13.13 0 0 0-.12.13v.93c0 .07.06.13.13.13h10.25c.06 0 .12-.06.12-.13v-.93a.13.13 0 0 0-.13-.13Zm0-11.31H2.87a.13.13 0 0 0-.12.12v.94c0 .07.06.13.13.13h10.25c.06 0 .12-.06.12-.13v-.94a.13.13 0 0 0-.13-.12ZM9.54 5.91c.1 0 .15-.11.1-.19l-1.58-2a.11.11 0 0 0-.18 0l-1.57 2a.11.11 0 0 0 .09.19h1.04v4.18h-.98c-.1 0-.15.11-.1.19l1.58 1.99c.05.06.13.06.18 0l1.57-2a.11.11 0 0 0-.09-.18H8.56V5.91h.98Z"
								/>
							</svg>
							height
						</span>
						<span class="text-title-medium flex w-full justify-center p-2"
							>{(pokemon.height * 0.1).toFixed(1)} m</span
						>
					</div>
				</div>
			{/await}

			<section
				style="grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));"
				class="grid gap-2"
			>
				<PokeStat stats={pokemon.stats[0]} />
				<PokeStat stats={pokemon.stats[1]} />
				<PokeStat stats={pokemon.stats[2]} />
				<PokeStat stats={pokemon.stats[2]} />
				<PokeStat stats={pokemon.stats[4]} />
				<PokeStat stats={pokemon.stats[5]} />
			</section>
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
</style>
