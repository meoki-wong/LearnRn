module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      // 使用mobx的插件配置
      ['@babel/plugin-proposal-decorators',{'legacy': true}]]
  };
};
