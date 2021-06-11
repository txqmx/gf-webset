<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!--主应用-->
      <el-menu-item index="/">
        主应用
      </el-menu-item>
      <!--子应用-->
      <el-menu-item index="/teacher">
        老师端
      </el-menu-item>
      <el-menu-item index="/student">
        学生端
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="teacher"></div>
    <div id="student"></div>
  </div>
</template>

<style lang="less">

</style>
