import { createPokemonIndex, searchPokemon } from '$lib/search';

interface Payload {
	searchTerm: string;
}

interface MessageData {
	type: 'load' | 'search';
	payload: Payload;
}

addEventListener('message', async ({ data }: MessageEvent<MessageData>) => {
	const { type, payload } = data;

	let indexCreated = false;
	if (type === 'load' && !indexCreated) {
		indexCreated = true;

		const res = await fetch('/api/pokemon?limit=1302');
		const data = (await res.json()) as CachedPokemon[];
		createPokemonIndex(data);
        
		postMessage({ type: 'ready' });
	}
    
	if (type === 'search') {
        const searchTerm = payload.searchTerm;
		const result = await searchPokemon(searchTerm);
		postMessage({ type: 'result', payload: { result, searchTerm } });
	}
});
