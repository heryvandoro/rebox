import React, { Component } from 'react';
import TodoGridContainer from '@rebox/modules/todo/containers/todo.grid.container';
import { TodoService } from '@rebox/domains/todo/services/todo.service';

interface TodoGridPageProps {}

export default class TodoGridPage extends Component<TodoGridPageProps> {
	private todoService: TodoService;

	constructor(props: TodoGridPageProps) {
		super(props);
		this.todoService = new TodoService();
	}

	componentDidMount(): void {
		this.todoService.getTodos({
			'_page': 1,
		});
	}

	render() {
		return (
			<div className="admin-template-content">
				<TodoGridContainer />
			</div>
		)
	}
}