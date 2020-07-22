module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 换算的基数(设计图750的根字体为75，我这里设置成75的一半37.5，至于原因请看下面的注意事项)
      propList: ['*'], // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
      minPixelValue: 2 // 小于或等于`2px`不转换为视窗单位
    }
  }
}