const Sequelize = require('sequelize')

const sequelize = new Sequelize('数据库名称, 账号, 密码', {
    host: 'localhost', // 地址
    dialect: 'mysql', // 指定数据库的类型
    port: '3306' // 数据库的默认端口为3306
})