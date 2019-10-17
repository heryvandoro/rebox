import React, { Component } from 'react';
import { Todo } from '@rebox/domains/todo/models/todo';
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

interface TodoGridComponentProps {
	todos: Array<Todo>;
}

export class TodoGridComponent extends Component<TodoGridComponentProps> {
	private columns: Array<ColumnProps<Todo>>;
	constructor(props: TodoGridComponentProps) {
		super(props);

		this.columns = [
			{
				title: "Title",
				key: "title",
				render: (row: Todo) => (
					<div>
						{row.title}
					</div>
				)
			},
			{
				title: "Completed",
				key: "completed",
				render: (row: Todo) => (
					<div>
						{row.completed ? 'Yes' : 'No'}
					</div>
				)
			}
		];
	}

	render() {
		const {todos} = this.props;

		return (
			<Table rowKey="id" dataSource={todos} columns={this.columns} pagination={false} />
		)
	}
}