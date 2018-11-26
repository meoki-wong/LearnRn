import React,{Component} from 'react';
import {View,Text} from 'react-native';

import Cup from './Cup';

export default class  Glass extends Component {

	render() {
		return (
			<View>
				<Text>Glass</Text>
				<Cup type="Mini"/>
			</View>
		)
	}

}