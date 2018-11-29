import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Index extends Component {

  // state = {
  //   nama: 'Arief Yusron',
  //   asal: 'Sumenep',
  //   no: 0,
  //   detik: 0,
  // }

  // ini sama aja. cuman kebanyakan orang pakek ini
  constructor(props) {
    super(props);
  
    this.state = {
      nama: 'Arief Yusron',
      asal: 'Sumenep',
      no: 0,
      detik: 0,      
    };
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        detik: this.state.detik + 1,
      });
    },1000);
  }

  handleClick(i){
    this.setState({
      asal: i,
    });
  }

  handleClickTwo(){
    this.setState({
      no: this.state.no+1,
    });
  }

  render(){

    return (
      <View>
        <Text>{this.state.nama}</Text>
        <Text>{this.state.asal}</Text>
        <TouchableOpacity onPress={()=>this.handleClick('Madiun')}>
          <Text>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.handleClickTwo()}>
          <Text>Tambah</Text>
        </TouchableOpacity>
        <Text>{this.state.no}</Text>
        <Text>{this.state.detik} detik</Text>
      </View>
    )
  }

}