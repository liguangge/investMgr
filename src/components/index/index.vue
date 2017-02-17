<template>
  <div class="index">
    index
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    created() {
      this.$emit('showloadimg')
      setTimeout(() => {
      }, 500)
      console.log('created index')
    },
    mounted() {
      console.log('mouted index')
      this.$emit('hideloadimg')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
