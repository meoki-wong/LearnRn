import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableHighlight, Dimensions} from "react-native";
import {Provider} from 'mobx-react'
import RootStore from './mobx/RootStore'


import Animate from './src/animated.jsx'
import FlexBox from './src/flex.jsx'
import ComponentBox from './src/componentDidMount.jsx'
import MobxChange from './src/MobxChange'


export default function App() {
  const [count, setCount] = useState(10);
  const btnClick = () => {
    // count += 1
    setCount(count + 1);
  };

  const onTouchableHeightlight = ()=>{
    alert('我被点击了')
  }
  const longBtn = ()=>{
    alert('我被长恩了')
  }
  
  const screenWidth = Math.round(Dimensions.get('window').width)
  const screenheight = Math.round(Dimensions.get('window').height)
  return (
    <Provider RootStore={RootStore}>
      <View style={styles.container}>

        <View>
  <Text>{RootStore.name}</Text>
        </View>

        <View>
          <MobxChange />
        </View>

<View>
  <ComponentBox />
</View>

  <View style={{width:screenWidth/2,height:screenheight/2,backgroundColor: 'yellow'}}>
    <FlexBox style={{backgroundColor:'red', width: 12,height: 13}}></FlexBox>
  </View>
  
  <Button title="点我" onPress={btnClick} />
  <Text>{count}</Text>
  <View style={{ backgroundColor: "yellow" }}>
    <Text>我是老</Text>
  </View>
  <View style={{ backgroundColor: "pink" }}>
    <Text>我是老二</Text>
  </View>


  
  <TouchableHighlight onPress={onTouchableHeightlight} onLongPress={longBtn}>
    <Text>你点我</Text>
  </TouchableHighlight>
</View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop: 30
  },
});
