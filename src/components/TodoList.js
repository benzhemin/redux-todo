import React from "react";
import { connect } from 'react-redux';
import Todo from './Todo';
import { VISIBILITY_FILTERS } from "../constants";

const TodoList = ({ todos }) => {
	return (
		<ul>
			{ todos && todos.length && 
				todos.map((todo) => {
					return <Todo key={todo.id} todo={todo} />
			})}
		</ul>
	)
}

const mapStateToProps = (state) => {
	debugger;
	const { visibilityFilter } = state;

	const todos = state.todos.filter((todo) => {
		switch(visibilityFilter) {
			case VISIBILITY_FILTERS.COMPLETED: {
				return todo.completed;
			}
			case VISIBILITY_FILTERS.INCOMPLETE: {
				return !todo.completed;
			}
			case VISIBILITY_FILTERS.ALL:
			default: {
				return true;
			}
		}
	});
	return { todos };
}

export default connect(mapStateToProps)(TodoList);