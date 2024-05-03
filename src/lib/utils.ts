import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function gibberish(thing: string | Elements, bg = true, hover = false) {
	if (bg) {
		if (hover) return `var(--color-${thing}-hover)`;
		return `var(--color-${thing})`;
	}

	if (hover) return `var(--color-on-${thing}-hover)`;
	return `var(--color-on-${thing})`;
}

const animationTimingFunction = 'cubic-bezier(0.291, 0.281, 0, 1.2)';
const initialBottomValue = ['0px', '6rem'];
const scrolledDownBottomValue = ['-80px', '1rem'];

type DebounceFunction = (...args: unknown[]) => void;
function debounce(fn: DebounceFunction, delay: number) {
	let timer: ReturnType<typeof setTimeout>;

	return (...args: unknown[]) => {
		if (timer) clearTimeout(timer);

		timer = setTimeout(() => {
			fn(...args);
		}, delay);
	};
}

/**
 * The `handleScroll` function adjusts the position of a node and a floating action button based on the
 * scroll direction.
 * @param {HTMLElement} node - The `node` parameter is an HTMLElement that represents the element whose
 * position will be adjusted based on the scroll direction.
 * @param {HTMLElement} [fab] - The `fab` parameter is an optional parameter that represents a floating
 * action button. It is of type `HTMLElement`, which means it can be any HTML element. If a `fab`
 * element is provided, the function will adjust its position based on the scroll direction. If no
 * `fab` element is
 */
export function handleScroll(node: HTMLElement, fab?: HTMLElement) {
	let lastScrollTop = 0;

	node.style.animationTimingFunction = animationTimingFunction;
	if (fab) fab.style.animationTimingFunction = animationTimingFunction;

	/**
	 * The function updates the scroll position and adjusts the position of a node and a floating action
	 * button based on the scroll direction.
	 */
	function updateScroll() {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const isScrollingDown = scrollTop > lastScrollTop;
		node.style.bottom = isScrollingDown ? scrolledDownBottomValue[0] : initialBottomValue[0];

		if (fab)
			fab.style.bottom = isScrollingDown ? scrolledDownBottomValue[1] : initialBottomValue[1];
		lastScrollTop = scrollTop;
	}

	addEventListener('scroll', debounce(updateScroll, 100), { passive: true });
}
