import type { Elements } from './lib';

export function gibberish(thing: string | Elements, bg = true, hover = false) {
	if (bg) {
		if (hover) return `var(--color-${thing}-hover)`;
		return `var(--color-${thing})`;
	}

	if (hover) {
		return `var(--color-on-${thing}-hover)`;
	} else {
		return `var(--color-on-${thing})`;
	}
}
