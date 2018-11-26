import React,{Component} from 'react';
import {View, Text} from 'react-native';

export default class Index extends Component {

  componentWillMount(){
    console.log('Component Will Mount');
  }

  componentDidMount(){
    console.log('Component Did Mount');
  }

  render(){
    return (
      <View>
        <Text>Halo</Text>
      </View>
    )
  }

}