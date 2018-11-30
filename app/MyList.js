import React,{Component} from 'react';
import {View,Text,ListView} from 'react-native';

import ViewList from './ViewList';

export default class MyList extends Component {

  data = [
    'Arief',
    'Yusron'
  ]

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.data)
    };
  }

  render() {
    return (
      <View>
        <Text>List With DataSource 1:</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
        <Text>-----------------------</Text>
        <Text>List With DataSource 2:</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ViewList data={rowData} />}
        />
        <Text>-----------------------</Text>
        <Text>List With maps: </Text>
        {this.data.map((bebas, key)=> <Text key={key}>{bebas}</Text>)}
      </View>
    );
  }

}