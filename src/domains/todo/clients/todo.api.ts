import { BaseApi } from '@rebox/domains/shared/clients/base.api';
import { Todo } from '@rebox/domains/todo/models/todo';
import { mapToArrayClass } from '@rebox/domains/shared/transformers/data.transformer';

export class TodoApi extends BaseApi {
	public getTodos(query: any = {}): Promise<Array<Todo>> {
		return this.make('GET', '/todos', query).then(response => mapToArrayClass(Todo, response))
	}
}