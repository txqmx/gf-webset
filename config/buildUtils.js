const glob = require('glob')

module.exports = {
  // 获取项目列表
  getProjectList: () => {
    const projectArray = []
    const moduleSrcArray = glob.sync('./src/apps/*')
    for (const i in moduleSrcArray) {
      projectArray.push(moduleSrcArray[i].split('/')[3])
    }
    return projectArray
  },
  // npm命令获取名称 npm run serve --project=teacher
  getProjectName: () => {
    const argvObject = JSON.parse(process.env.npm_config_argv || null)
    const original = argvObject && argvObject.original
    if (original && original.length) {
      const index = original.findIndex((item) => {
        return item.includes('--project=')
      })
      if (index >= 0) {
        return original[index].split('=')[1]
      }
    }
    return 'main'
  }
}
