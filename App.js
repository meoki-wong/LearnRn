import React,{Component} from 'react';
import {View, Text} from 'react-native';

import Glass from './app/components/Glass';

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
        <Glass/>
      </View>
    )
  }

}