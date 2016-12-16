var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState: function(){
		return {
			isLoading: false
		};
	},

	handleSearch: function(location) {
		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then((temp) => {

			this.setState({
				location: location,
				temp: temp,
				isLoading: false
			});

		},(error) => {
			this.setState({isLoading:false})
			console.log(error)
			alert(error);
		});


	},

	render: function() {
		var {isLoading, temp, location} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3>Fetching Weather...</h3>
			} else if (temp && location) {

				return <WeatherMessage temp={temp} location={location} />
			}
		}

		return (
			<div>
				<h1>Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch} />
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;