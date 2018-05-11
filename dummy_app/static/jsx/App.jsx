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
        this.suggestions = "";

		this.tagState = {
			nesia: 0,
			hatuna: 0,
			brith: 0,
			study: 0,
			birth: 0,
			separation: 0,
			grief: 0,
			bday: 0,
			discharge: 0,
			draft: 0,
			mitzvush: 0,
			job: 0
		};

		// bind function call to the component
		this.fetch_data = this.fetch_data.bind(this);
	}

	fetch_data(selected="חתונה") {
		const url = 'https://tsatet-ota.herokuapp.com/occasions/'+selected+'/citations';
        var that = this;
		fetch(url).then(data => data.json())
			.then(res => this.suggestions = res;)
			.catch(e => console.log(e));
	}

	searchMainClick() {
        this.fetch_data;
	}


	onNesia() {
		if (this.tagState["nesia"] === 0)
			this.tagState["nesia"] = 1;
		if (this.tagState["nesia"] === 1)
			this.tagState["nesia"] = 0;
	}

	onHatuna() {
		if (this.tagState["hatuna"] === 0)
			this.tagState["hatuna"] = 1;
		if (this.tagState["hatuna"] === 1)
			this.tagState["hatuna"] = 0;
	}

	onBrith() {
		if (this.tagState["brith"] === 0)
			this.tagState["brith"] = 1;
		if (this.tagState["brith"] === 1)
			this.tagState["brith"] = 0;
	}

	onStudy() {
		if (this.tagState["study"] === 0)
			this.tagState["study"] = 1;
		if (this.tagState["study"] === 1)
			this.tagState["study"] = 0;
	}

	onBrith() {
		if (this.tagState["birth"] === 0)
			this.tagState["birth"] = 1;
		if (this.tagState["birth"] === 1)
			this.tagState["birth"] = 0;
	}

	onSeparation() {
		if (this.tagState["separation"] === 0)
			this.tagState["separation"] = 1;
		if (this.tagState["separation"] === 1)
			this.tagState["separation"] = 0;
	}

	onGrief() {
		if (this.tagState["grief"] === 0)
			this.tagState["grief"] = 1;
		if (this.tagState["grief"] === 1)
			this.tagState["grief"] = 0;
	}

	onBday() {
		if (this.tagState["bday"] === 0)
			this.tagState["bday"] = 1;
		if (this.tagState["bday"] === 1)
			this.tagState["bday"] = 0;
	}

	onDischarge() {
		if (this.tagState["discharge"] === 0)
			this.tagState["discharge"] = 1;
		if (this.tagState["discharge"] === 1)
			this.tagState["discharge"] = 0;
	}

	onDraft() {
		if (this.tagState["draft"] === 0)
			this.tagState["draft"] = 1;
		if (this.tagState["draft"] === 1)
			this.tagState["draft"] = 0;
	}

	onMitzvush() {
		if (this.tagState["mitzvush"] === 0)
			this.tagState["mitzvush"] = 1;
		if (this.tagState["mitzvush"] === 1)
			this.tagState["mitzvush"] = 0;
	}

	onBday() {
		if (this.tagState["bday"] === 0)
			this.tagState["bday"] = 1;
		if (this.tagState["bday"] === 1)
			this.tagState["bday"] = 0;
	}

	onJob() {
		if (this.tagState["job"] === 0)
			this.tagState["job"] = 1;
		if (this.tagState["job"] === 1)
			this.tagState["job"] = 0;
	}

	render() {

		return (
			<Grid fluid>
				<Row className="justify-content-center">
					<div className="center-block text-center">
						<h1>צטט אותה</h1>
						<hr className="header_hr"/>
					</div>
				</Row>
				<Row className="justify-content-center">
					<input type="text"></input>
					<MainSearchButton
						className="btn btn-info"
						onClick={this.fetch_data}>
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
					<button type="button" className="col-md-2 btn btn-outline-primary" onClick={this.onNesia}>נסיעה
					</button>
					<button type="button" className="col-md-2 btn btn-outline-primary" onClick={this.onHatuna}>חתונה
					</button>
					<button type="button" className="col-md-2 btn btn-outline-primary" onClick={this.onBrith}>ברית
					</button>
					<button type="button" className="col-md-2 btn btn-outline-primary" onClick={this.onStudy}>התחלת
						לימודים
					</button>
					<button type="button" className="col-md-2 btn btn-outline-primary" onClick={this.onBirth}>לידה
					</button>
					<button type="button" className="col-md-2 btn btn-outline-primary"
							onClick={this.onSeparation}>פרידה
					</button>
					<button type="button" className="col-md-2 btn btn-outline-primary" onClick={this.onGrief}>אבל
					</button>
					<button type="button" className="col-md-2 btn btn-outline-primary" onClick={this.onBday}>יום הולדת
					</button>
					<button type="button" className="col-md-2 btn btn-outline-primary" onClick={this.onDischarge}>שחרור
						מהצבא
					</button>
					<button type="button" className="col-md-2 btn btn-outline-primary" onClick={this.onDraft}>גיוס
						לצבא
					</button>
					<button type="button" className="col-md-2 btn btn-outline-primary" onClick={this.onMitzvush}>בר/בת
						מצוה
					</button>
					<button type="button" className="col-md-2 btn btn-outline-primary" onClick={this.onJob}>תפקיד חדש
					</button>
				</Row>
				<Row>
                    { this.suggestions }
				</Row>
			</Grid>
		);
	}
};

// typechecking 
App.PropTypes = {
	jsvar: PropTypes.string.isRequired,
}

export default App;
