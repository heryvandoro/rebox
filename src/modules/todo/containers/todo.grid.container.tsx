import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '@rebox/store';
import { Todo } from '@rebox/domains/todo/models/todo';
import { TodoGridComponent } from '@rebox/modules/todo/components/todo-grid.component';
import { Card } from 'antd';
import { SET_TODOS } from '@rebox/domains/todo/actions/todo.action';
import ReboxLoader from '@rebox/modules/shared/loader';

interface TodoGridContainerProps {
	todos: Array<Todo>;
	isLoading: boolean;
}

class TodoGridContainer extends Component<TodoGridContainerProps> {
	render() {
		const {todos, isLoading} = this.props;
		return (
			<Card>
				{isLoading ? (
					<div className="d-flex justify-content-center align-items-center py-5">
						<ReboxLoader />
					</div>
				) : (
					<TodoGridComponent todos={todos} />
				)}
			</Card>
		)
	}
}

const mapStateToProps = (state: AppState) => ({
	todos: state.todo.todos,
	isLoading: state.common.loading[SET_TODOS]
});

export default connect(mapStateToProps)(TodoGridContainer)