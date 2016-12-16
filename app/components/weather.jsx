var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');

var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState: function(){
		return {
			isLoading: false
			
		};
	},

	handleSearch: function(location) {
		this.setState({isLoading: true, errorMessage: undefined});


		openWeatherMap.getTemp(location).then((temp) => {

			this.setState({
				location: location,
				temp: temp,
				isLoading: false
			});

		},(error) => {
			this.setState({isLoading:false, errorMessage: error.message})
			
		});


	},

	render: function() {
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching Weather...</h3>
			} else if (temp && location) {

				return <WeatherMessage temp={temp} location={location} />
			}
		}

		function renderError() {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				);
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch} />
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;