import React,{Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Index extends Component {

  render(){

    return (
      <View style={styles.container}>
        <View style={[styles.row,styles.header]}>
          <Text style={[styles.textCenter,styles.textHeader]}>Header</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textCenter}>1</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.textCenter}>2</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textCenter}>3</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.textCenter}>4</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.textCenter}>5</Text>
          </View>
        </View>
        <View style={[styles.row,styles.justifyContentCenter]}>
          <View style={styles.col8}>
            <Text style={styles.textCenter}>6</Text>
          </View>
        </View>
        <View style={[styles.row,styles.footer]}>
          <Text style={[styles.textCenter,styles.textFooter]}>By. Arief Yusron</Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    backgroundColor: 'green',
    margin: 1,
  },
  col8: {
    flex: 8/12,
    backgroundColor: 'pink'
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  header: {
    flex: 0.2,
    backgroundColor: 'red',
  },
  footer: {
    flex: 0.1,
    backgroundColor: 'blue',
  },
  textCenter: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    textAlignVertical: 'center'
  },
  textHeader: {
    fontSize: 30
  },
  textFooter: {
    fontStyle: 'italic'
  }
});