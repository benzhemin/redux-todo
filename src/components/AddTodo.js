import React from "react"
import { connect } from "react-redux";
import { addTodo } from '../redux/actions';

class AddTodo extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			todoVal: ''
		};
	}

	handleInputChange(e) {
		const { value } = e.target;
		this.setState({
			todoVal: value,
		});
	}

	handleAddTodo() {
		const { todoVal } = this.state;

		this.props.addTodo(todoVal);
	}

	render() {
		const { todoVal } = this.state;
		return (
			<div>
				<input
					type="text"
					onChange={this.handleInputChange.bind(this)}
					value={todoVal}
				/>
				<button onClick={this.handleAddTodo.bind(this)}>
					add
				</button>
			</div>
		);
	}
}

export default connect(null, { addTodo })(AddTodo);