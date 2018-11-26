import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Index extends Component {

  handleClick(i){
    console.log('Nama saya '+i.nama+' asal '+i.asal);
  }

  render(){

    const profil = {
      nama: 'Arief Yusron',
      asal: 'Sumenep'
    }

    return (
      <View>
        <Text>Please Click</Text>
        <TouchableOpacity onPress={()=>this.handleClick(profil)}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    )
  }

}