<script lang="ts">
	import PokePill from '$lib/components/cards/PokePill.svelte';
	import PokeStat from '$lib/components/cards/PokeStat.svelte';
	import Icon from '$lib/elements/Icon.svelte';
	import { gibberish } from '$lib/utils';
	import { fade } from 'svelte/transition';
	// import Habitat from '$lib/components/cards/Habitat.svelte';
	let { data } = $props();

	const { pokemon, specie, streamed } = data;

	const id = pokemon.id;

	let naturalWidth = $state<number>(0);
	let naturalHeight = $state<number>(0);

	$inspect(naturalWidth);
	$inspect(naturalHeight);

	const icon = pokemon.sprites?.versions?.['generation-vii'].icons.front_default;
	const pokemontypes = pokemon.types[0].type.name;

	let init = $state(false);
	$effect(() => {
		init = true;
	});
</script>

<svelte:head>
	<link rel="shortcut icon" sizes="48x48" href={icon} />
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
			<button class="ring-0 hover:ring-2  transition-shadow ring-surface rounded-full inline-flex items-center" onclick={() => history.back()}>
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
		{#if init}
			<figure in:fade={{ duration: 300, delay: 300 }}>
				<img
					src="https://projectpokemon.org/images/normal-sprite/{pokemon.name}.gif"
					bind:naturalWidth
					bind:naturalHeight
					style:width={`${naturalWidth * 2}px`}
					style:height={`${naturalHeight * 2}px`}
					alt="{pokemon.name} gif"
					loading="eager"
				/>
			</figure>
		{/if}
	</header>

	<main class="infodata-section">
		<hgroup>
			<h1 class="text-headline-large capitalize" style:view-transition-name={pokemon.name}>
				{pokemon.name}
			</h1>
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
			{specie.flavor_text_entries[0]?.flavor_text.replace(/\f/g, ' ')}
		</section>
		<section class="mb-10 flex flex-col gap-5">
			<div class="fill-on-surface inline-flex w-full gap-5">
				<div class="flex w-full flex-col gap-1">
					<span class="text-label-medium inline-flex items-center gap-1.5 uppercase">
						<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16">
							<path
								d="M14,11V8c4.56-0.58,8-3.1,8-6H2c0,2.9,3.44,5.42,8,6l0,3c-3.68,0.73-8,3.61-8,11h6v-2H4.13c0.93-6.83,6.65-7.2,7.87-7.2 s6.94,0.37,7.87,7.2H16v2h6C22,14.61,17.68,11.73,14,11z M18.87,4C17.5,5.19,15,6.12,12,6.12C9,6.12,6.5,5.19,5.13,4H18.87z M12,22 c-1.1,0-2-0.9-2-2c0-0.55,0.22-1.05,0.59-1.41C11.39,17.79,16,16,16,16s-1.79,4.61-2.59,5.41C13.05,21.78,12.55,22,12,22z"
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							enable-background="new 0 0 24 24"
							height="16"
							viewBox="0 0 24 24"
							width="16"
						>
							<polygon
								points="13,6.99 16,6.99 12,3 8,6.99 11,6.99 11,17.01 8,17.01 12,21 16,17.01 13,17.01"
							/>
						</svg>
						height
					</span>
					<span class="text-title-medium flex w-full justify-center p-2"
						>{(pokemon.height * 0.1).toFixed(1)} m</span
					>
				</div>
			</div>

			<div class="fill-on-surface inline-flex w-full gap-5 capitalize">
				<div class="flex w-full flex-col gap-1">
					<span class="text-label-medium inline-flex items-center gap-1.5 uppercase">
						<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16">
							<path
								d="M17.2,3H6.8l-5.2,9l5.2,9h10.4l5.2-9L17.2,3z M16.05,19H7.95l-4.04-7l4.04-7h8.09l4.04,7L16.05,19z"
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
						<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16">
							<path
								d="M11,21h-1l1-7H7.5c-0.88,0-0.33-0.75-0.31-0.78C8.48,10.94,10.42,7.54,13.01,3h1l-1,7h3.51c0.4,0,0.62,0.19,0.4,0.66 C12.97,17.55,11,21,11,21z"
							/>
						</svg>
						abilities
					</span>
					<span class="text-title-medium flex w-full justify-center p-2">
						{pokemon.abilities[0].ability.name} / {pokemon.abilities[1].ability.name}
					</span>
				</div>
			</div>

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

		<!-- <div>
			<Habitat habitatName={specie.habitat.name} />
		</div> -->

		<div>
			{#await streamed.evolution_chain}
				loading...
			{:then ec}
				{ec.chain.species.name}
				->
				{ec.chain.evolves_to[0].species.name}
				->
				{ec.chain.evolves_to[0].evolves_to[0].species.name}
			{/await}
		</div>
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
