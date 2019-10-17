import { Collection } from '../types/collection';
import { plainToClass } from 'class-transformer';
import { AxiosResponse } from 'axios';

export function mapToCollection<T>(
	type: { new (): T },
	res: AxiosResponse,
): Collection<T> {
	const {
		total_data,
		first_page,
		last_page,
		limit,
		current_page,
	} = res.data.meta;

	return {
		data: plainToClass(type, <T[]>res.data),
		total_data,
		first_page,
		last_page,
		limit,
		current_page,
	};
}

export function mapToArrayClass<T>(
	type: { new (): T },
	res: AxiosResponse,
): Array<T> {
	if (Array.isArray(res.data)) {
		return plainToClass(type, <Array<T>>res.data);
	}

	throw new Error('Transformer: Data is not an array!');
}

export function mapToClass<T>(type: { new (): T }, res: AxiosResponse): T {
	if (!Array.isArray(res.data)) {
		return plainToClass(type, <T>res.data);
	}

	throw new Error('Transformer: Data is an array!');
}
