import React,{useState} from 'react';
import {View, Text,Image, ImageBackground, TextInput} from 'react-native'


const FlexBox = ()=>{
/* 
RN中默认容器中布局方式都是flex
方向默认flexDirection:column
*/
const [testChange,setTestChange] = useState('')
const changeText = (param)=>{
    setTestChange(param)
}

    return (
        
        <View>
            <ImageBackground style={{width: 30, height: 30, marginTop: 30}} source={require('../11.png')}>
            

            <Text style={{color:'red'}}>我是flex</Text>
            {/* <Image source={require('../11.png')} /> */}
            
                    </ImageBackground>
            
            <TextInput onChangeText={changeText} style={{width: 100,height: 30,backgroundColor: '#fff'}}/>
    <Text>{testChange}</Text>
        </View>
        
    )
}

export default FlexBox