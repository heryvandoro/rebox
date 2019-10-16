export function convertToSlug(str: string): string {
	if (!str) return '';
	return str
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
}
