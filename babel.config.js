const plugins = [
  [
    'import',
    {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: name => `${name}/style/less`
    },
    'vant'
  ]
]
// 生产环境移除console
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}
module.exports = {
  plugins: plugins,
  presets: ['@vue/cli-plugin-babel/preset']
}