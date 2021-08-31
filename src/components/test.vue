<template>
  <div>
    111
  </div>
</template>

<script>
export default {
  name: 'Test',
  created () {
    console.log(process.env.VUE_APP_PROJECT_NAME)
  }
}
</script>

<style scoped>

</style>
