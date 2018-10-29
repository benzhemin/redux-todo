import React from "react";
import { connect } from 'react-redux';
import Todo from './Todo';
import { VISIBILITY_FILTERS } from "../constants";

const TodoList = ({ todos }) => {
	return (
		<ul>
			{ todos && todos.length ?  
				todos.map((todo) => {
					return <Todo key={todo.id} todo={todo} />
				}) : null}
		</ul>
	)
}

const visFilter = (visibilityFilter, todo) => {
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
}

const mapStateToProps = (state) => {
	const { visibilityFilter } = state;
	
	const { todos: { allIds = [], byIds = {} } } = state;

	const fallIds = allIds.filter((id) => visFilter(visibilityFilter, byIds[id]));
	const ftodos = fallIds.map(id => ({ ...byIds[id], id }) );

	return { todos: ftodos };
}

export default connect(mapStateToProps)(TodoList);