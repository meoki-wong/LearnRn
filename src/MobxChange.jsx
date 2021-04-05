import React, { Component } from 'react'
import {Text, View} from 'react-native'
import {inject,observer} from 'mobx-react'
@inject('RootStore') // 取出由全局接收的mobx数据
@observer  // 修改数据  并且重新在页面赋值

export default class MobxChange extends Component {
    
    changeMobxNumber = ()=>{
        this.props.RootStore.changeName('去的')
    }
    render() {
        
        return (
            <View>
                <Text onPress={this.changeMobxNumber}>{this.props.RootStore.name}</Text>       
            </View>
        )
    }
}

