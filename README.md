# gf-webset

## 介绍
基于vue-cli构建

## 启动方式

```
npm run serve --project=teacher
npm run serve --project=student
```
or

```
npm run dev // 选择项目
```

## 打包方式
```
npm run build --project=teacher
npm run build --project=student
```

## 项目结构

```
├── config // 脚手架的扩展配置
├── src // 业务代码
  ├── components  // 通用组件，功能一样，可根据不同端添加样式
  ├── static // 通用资源
  ├── utils // 通用方法
  ├── student // 学生端
  ├── teacher // 教师端
    ├── api
    ├── static // 子项目资源
    ├── components
    ├── router
    ├── store
    ├── App.vue
    ├── main.js
    ├── devConfig // 子项目打包配置
```
