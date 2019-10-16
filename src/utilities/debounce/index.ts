export function debounce(
	func: Function,
	wait: number,
	immediate: boolean = false,
): any {
	let timeout: number;
	return function() {
		// @ts-ignore
		const context = this,
			args = arguments;

		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;

		clearTimeout(timeout);
		timeout = window.setTimeout(later, wait);

		if (callNow) func.apply(context, args);
	};
}
