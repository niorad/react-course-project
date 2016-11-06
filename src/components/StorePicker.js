import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {

	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}

	goToStore(event) {
		event.preventDefault();
		this.context.router.transitionTo(`/store/${this.storeInput.value}`);
	}

	render() {
		return (
			<form
				className="store-selector"
				onSubmit={this.goToStore}
			>
			<h2>Please enter a store</h2>
			<input
				type="text"
				required
				placeholder="Store Name"
				ref={(input) => { this.storeInput = input }}
				defaultValue={getFunName()}
			/>
			<button type="submit">Visit store -></button>
			</form>
		);
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;
