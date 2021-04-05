import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'
import {inject, observer} from 'mobx-react'

@inject('RootStore') // 接收数据
@observer // 监听数据发生变化 并且渲染
export default class ComponentBox extends Component {
    state={
        isShow: true
    }
    changeShow = ()=>{
        const {isShow} = this.state
        this.setState({isShow: !isShow})
    }
    render() {
        return (
            <View>
                <Button title="点我你消失" onPress={this.changeShow}/>
                {this.state.isShow&&<Text>{'看我显示还是消失'}</Text>}
            </View>
        )
    }
}

