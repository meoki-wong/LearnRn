import {observable, action} from 'mobx'

class RootStore{

    @observable // es7装饰器   表示数据可以做全局共享
    name = '悟空'


    @action   // 行为   修改名称
    changeName(name){
        this.name = name
    }
}


export default new RootStore()