var React = require('react');

var WeatherForm = React.createClass({

	onFormSubmit: function(e) {
		e.preventDefault()

		var location = this.refs.location.value

		if (location.length > 0) {
			this.refs.location.value = '';

			this.props.onSearch(location);
		}
	},

	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input type="search" ref="location" placeholder="Search weather by city" />
				</div>
				<div>
					<button className="expanded hollow button">Get Weather</button>
				</div>
			</form>
		);
	}
});


module.exports = WeatherForm;