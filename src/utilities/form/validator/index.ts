export function hasError(
	fieldsError: Record<string, string[] | undefined> | string[] | undefined,
): boolean {
	if (!fieldsError) return false;

	if (Array.isArray(fieldsError)) {
		return fieldsError.some((_) => _ !== undefined);
	}

	return Object.keys(fieldsError).some(
		(field) => fieldsError[field] !== undefined,
	);
}
