import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View,Text} from 'react-native';

class Coffee extends Component {

	render() {
		const {type,a,volume,info} = this.props;

		return (
			<View>
				<Text>Coffee: {type} {a} {volume} ml</Text>
				<Text>Color: {info.color}</Text>
				<Text>Taste: {info.taste}</Text>
			</View>
		)
	}

}

Coffee.propTypes = {
	type: PropTypes.string.isRequired,
	a: PropTypes.string.isRequired,
	volume : PropTypes.number,
	info : PropTypes.object
}

export default Coffee;