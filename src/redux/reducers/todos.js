import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';
import update from 'immutability-helper';

const initialState = {
	allIds : [],
	byIds: {},
}

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO : {
			const { id, content } = action.payload;

			return update(state, {
				allIds: { $push: [id] },
				byIds: { id: { $set: { content, completed: false } } }
			});
		}
		case TOGGLE_TODO: {
			const { id } = action.payload;
			const { completed } = state[id];

			return update(state, {
				byIds: { id: { $set: { completed: !completed } } }
			});
		}
		default:
			return state;	
	}
}
