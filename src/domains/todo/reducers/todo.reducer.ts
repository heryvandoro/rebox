import { Reducer } from '@rebox/domains/shared/types/reducer';
import { TodoState } from '@rebox/domains/todo/states/state';
import { Todo } from '@rebox/domains/todo/models/todo';
import { SET_TODOS } from '@rebox/domains/todo/actions/todo.action';

export class TodoReducer extends Reducer<TodoState> {
	constructor(){
		super({
			todos: []
		})
	}

	public setTodos(state: TodoState, payload: Array<Todo>): TodoState {
		return {
			...state,
			todos: payload
		}
	}

	get actions(): { [p: string]: (state: TodoState, payload?: any) => TodoState } {
		return {
			[SET_TODOS]: this.setTodos
		};
	}
}