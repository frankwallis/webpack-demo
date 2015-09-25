import * as React from "react";

export class TweetView extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className='Home'>
				<h2>Tweets (React Component!!)</h2>
				<div className='Tweet'>
					<div className='Tweet-author'>
					<a href={this.props.link('tweets', {user: 'dan_abramov'})}>Dan Abramov ‏@dan_abramov</a>
					</div>
					<div className='Tweet-time'>12m12 minutes ago</div>
					<div className='Tweet-content'>Another use case for \`this.context\` I think might be valid: forms. They are too painful right now.</div>
				</div>
				<div className='Tweet'>
					<div className='Tweet-author'>
					<a href={this.props.link('tweets', {user: 'afanasjevas'})}>Eduardas Afanasjevas ‏@afanasjevas</a>
					</div>
					<div className='Tweet-time'>12m12 minutes ago</div>
					<div className='Tweet-content'>I just published “What will Datasmoothie bring to the analytics startup landscape?” https://medium.com/@afanasjevas/what-will-datasmoothie-bring-to-the-analytics-startup-landscape-f7dab70d75c3?source=tw-81c4e81fe6f8-1427630532296</div>
				</div>
				<div className='Tweet'>
					<div className='Tweet-author'>
					<a href={this.props.link('tweets', {user: 'LNUGorg'})}>LNUG ‏@LNUGorg</a>
					</div>
					<div className='Tweet-time'>52m52 minutes ago</div>
					<div className='Tweet-content'> new talks uploaded on our YouTube page - check them out http://bit.ly/1yoXSAO</div>
				</div>
			</div>
		)
	}
}

let tweetRoute = {
	path: "tweets",
	template: "<div data-bind='reactComponent: component'></div>",
    viewModel: function() {
		this.component = TweetView
	}
}

export default tweetRoute;