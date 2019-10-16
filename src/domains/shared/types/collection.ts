export interface Collection<T> {
	data: Array<T>;
	total_data: number;
	first_page: number;
	last_page: number;
	limit: number;
	current_page: number;
}

export class NullCollection<T> implements Collection<T> {
	data: Array<T> = [];
	current_page: number = 1;
	first_page: number = 1;
	last_page: number = 1;
	limit: number = 10;
	total_data: number = 0;
}
