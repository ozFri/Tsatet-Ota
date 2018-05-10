import {Grid, Row} from 'react-bootstrap';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Content from './Content';
// import Button from './Button';
import MainSearchButton from './MainSearchButton'
// import {MainTag} from './MainTag'

// If intensive GET/POST transaction are to occur, consider axios lib

// Stateful Component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			result: null
		}

		// bind function call to the component
		this.fetch_data = this.fetch_data.bind(this);
	}

	fetch_data() {
		const url = 'https://api.punkapi.com/v2/beers/random';
		fetch(url).then(data => data.json())
			.then(res => this.setState({result: res[0].name}))
			.catch(e => console.log(e));
	}

	searchMainClick() {
	}

	render() {
		return (
			<div>
				<Grid fluid>
					<Row>
						<div className="text-center">
							<h1>צטט אותה</h1>
							<hr className="header_hr"/>
						</div>
					</Row>
					<Row>
						<input type="text"></input>
						<MainSearchButton
							className="btn btn-info"
							onClick={this.searchMainClick}>
							רגש אותי</MainSearchButton>
					</Row>
					<Row>
						<hr className="header_hr"/>
					</Row>
					<Row>
						<div className="col-md-4">חפש אירוע או רגש</div>
						<div className="col-md-4">בחר צטטה מתאימה</div>
						<div className="col-md-4">עצב ברכה</div>
					</Row>
					<Row>
						<hr className="header_hr"/>
					</Row>
				</Grid>
				{/*<Grid>*/}
				{/*<Row>*/}
				{/*{<Content result={this.state.result} />}*/}
				{/*</Row>*/}
				{/*<Row>*/}
				{/*<div className="text-center">*/}
				{/*<Button*/}
				{/*className="btn btn-info"*/}
				{/*onClick={this.fetch_data}>*/}
				{/*Query Beer API*/}
				{/*</Button>*/}
				{/*</div>*/}
				{/*</Row>*/}
				{/*</Grid>*/}
			</div>
		);
	}
};

// typechecking 
App.PropTypes = {
	jsvar: PropTypes.string.isRequired,
}

export default App;
