import { BaseService } from '@rebox/domains/shared/services/base.service';
import { TodoApi } from '@rebox/domains/todo/clients/todo.api';
import { Todo } from '@rebox/domains/todo/models/todo';
import { SET_TODOS } from '@rebox/domains/todo/actions/todo.action';

export class TodoService extends BaseService {
	private todoApi: TodoApi;

	constructor() {
		super();
		this.todoApi = new TodoApi();
	}

	public async getTodos(query: any = {}): Promise<Array<Todo>> {
		this.setLoading(SET_TODOS, true);
		let todos: Array<Todo> = [];
		try {
			todos = await this.todoApi.getTodos(query);
			this.dispatch(SET_TODOS, todos)
		} catch (e) {

		}
		this.setLoading(SET_TODOS, false);
		return todos;
	}
}