export function randomString(length: number = 20): string {
	return Math.random()
		.toString(36)
		.substr(-length);
}
