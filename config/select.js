const inquirer = require('inquirer')
const exec = require('child_process').exec
const buildUtils = require('./buildUtils')

const projectList = buildUtils.getProjectList() // ['teacher', 'student', 'studentPad']

const promptList = [{
  type: 'list',
  message: '请选择项目名称:',
  name: 'projectName',
  choices: projectList.length > 0 ? projectList : ['无项目'],
  filter: function (val) {
    return val
  }
}]

inquirer.prompt(promptList).then(answers => {
  const childProcess = exec(`npm run serve --project=${answers.projectName}`, (error) => {
    if (error) {
      console.log(error)
    }
  })
  childProcess.stdout.on('data', (data) => {
    console.log(data)
  })
})
