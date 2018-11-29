import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Index extends Component {

  handleClick(i){
    alert('Halo '+i.nama);
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