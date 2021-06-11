const path = require('path')
const buildUtils = require('./config/buildUtils')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const projectName = buildUtils.getProjectName()
process.env.VUE_APP_PROJECT_NAME = projectName // 增加编译时变量

const projectPath = resolve('src/apps/' + projectName)
const projectConfigPath = projectPath + '/devConfig.js'

const projectConfig = require(projectConfigPath)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' && projectName !== 'main' ? `/${projectName}` : './',
  outputDir: projectName === 'main' ? 'dist' : `dist/${projectName}`,
  pages: projectConfig.pages,
  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': projectPath,
        '@root': resolve('src')
      }
    },
    output: {
      library: `${projectName}`,
      libraryTarget: 'umd'
    }
  },

  css: {
    sourceMap: false
  },

  devServer: {
    open: process.platform === 'darwin',
    disableHostCheck: true,
    host: '0.0.0.0',
    port: projectConfig.port,
    hotOnly: false,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
