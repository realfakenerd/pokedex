import type {Handle} from '@sveltejs/kit';

export const handle = (async ({event, resolve}) => {
	console.log(event.cookies);
	
	const response = await resolve(event);
	return response;
}) satisfies Handle;