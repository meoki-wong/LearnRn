import React,{Component} from 'react';
import {View,Text} from 'react-native';

import Coffee from './Coffee';

export default class  Cup extends Component {

	render() {
		const info = {
			color: "black",
			taste: "good"
		}


		return (
			<View>
				<Text>Cup: {this.props.type}</Text>
				<Coffee type="Americano" a="Panas" volume={100} info={info}/>
			</View>
		)
	}

}