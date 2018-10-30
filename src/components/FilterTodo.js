import React from "react"
import { connect } from 'react-redux';
import cx from 'classnames';
import { setFilter } from '../redux/actions'
import { VISIBILITY_FILTERS } from "../constants";

const FilterTodo = ({ activeFilter, setFilter }) => {
	return (Object.keys(VISIBILITY_FILTERS).map((fkey) => {
		const filter = VISIBILITY_FILTERS[fkey];
		return (
			<span 
				key={fkey}
				onClick={() => {
					setFilter(filter);
				}}
				className={cx('filter', filter === activeFilter && 'filter-active')}
			>
				{filter}
			</span>
		);
	}));
};

const mapStateToProps = (state) => {
	return { activeFilter: state.visibilityFilter };
}

export default connect(mapStateToProps, { setFilter })(FilterTodo);