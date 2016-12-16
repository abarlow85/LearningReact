var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=d57305c7b59129a804ca6488e9aebe46';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var url = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(url).then(function(res){
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error('Unable to fetch weather for that location');
		});
	}
}