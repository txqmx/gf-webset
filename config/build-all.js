const util = require('util')
const exec = util.promisify(require('child_process').exec)
const execSync = require('child_process').execSync
const buildUtils = require('./buildUtils')

const projectList = buildUtils.getProjectList()

for (const project of projectList) {
  // todo 控制进程数量，优化控制台输出展示
  console.log('正在编译:', project)
  if (project === 'main') {
    execSync(`npm run build --project=${project}`)
  } else {
    exec(`npm run build --project=${project}`).then(res => {
      console.log(res.stdout)
    }).catch(e => {
      console.log(e)
    })
  }
}
