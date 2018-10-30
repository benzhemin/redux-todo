import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';
import update from 'immutability-helper';

const initialState = {
	allIds : [],
	byIds: {},
}

export default function(state = initialState, action) {
	const { payload: { id } = {} } = action;

	switch (action.type) {
		case ADD_TODO : {
			const { content } = action.payload;
			return update(state, {
				allIds: { $push: [id] },
				byIds: { [id]: { $set: { content, completed: false } } }
			});
		}
		case TOGGLE_TODO: {
			const { completed } = state.byIds[id];
			return update(state, {
				byIds: { [id]: { $merge: { completed: !completed } } }
			});
		}
		default:
			return state;	
	}
}
