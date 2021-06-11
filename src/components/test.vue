<template>
  <div>
    111
  </div>
</template>

<script>
export default {
  name: "test",
  created() {
    console.log(process.env.VUE_APP_PROJECT_NAME);
  }
}
</script>

<style scoped>

</style>
