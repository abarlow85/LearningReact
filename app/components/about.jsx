var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>A simple weather application using the following tools:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - The JavaScript framework used.
				</li>
				<li>
					<a href="https://openweathermap.org">Open Weather Map</a> - The weather API used for obtaining data.
				</li>
			</ul>
		</div>
	);
}

module.exports = About;