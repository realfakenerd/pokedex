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

export function handleScroll(node: HTMLElement, fab?: HTMLElement) {
	let lastScrollTop = 0;
	addEventListener('scroll', () => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const isScrollingDown = scrollTop > lastScrollTop;

		node.style.animationTimingFunction = 'cubic-bezier(0.291, 0.281, 0, 1.2)';
		node.style.bottom = isScrollingDown ? '-80px' : '0';
		if (fab) {
			fab.style.animationTimingFunction = 'cubic-bezier(0.291, 0.281, 0, 1.2)';
			fab.style.bottom = isScrollingDown ? '1rem' : '6rem';
		}

		lastScrollTop = scrollTop;
	});
}
