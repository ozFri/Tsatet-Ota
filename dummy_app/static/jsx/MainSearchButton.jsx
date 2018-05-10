import React from 'react';
import PropTypes from 'prop-types';

// Stateless Functional Component
const MainSearchButton = ({onClick, children, className=''}) =>
	<button
		className={className}
		onClick={onClick}>
		{children}
	</button>

MainSearchButton.PropTypes = {
	onClick:   PropTypes.func.isRequired,
	className: PropTypes.string,
	children:  PropTypes.node.isRequired
}

MainSearchButton.defaultProps = {
	className: ''
}

export default MainSearchButton;
