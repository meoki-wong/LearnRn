import React,{Component} from 'react';
import {View,Text} from 'react-native';

import MyList from './app/MyList';

export default class Index extends Component {

  render(){
    return (
      <View>
        <MyList/>
      </View>
    )
  }

}