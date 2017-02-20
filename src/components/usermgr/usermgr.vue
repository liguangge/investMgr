<template>
  <div class="usermgr">
    usermgrdasfadsfadsfadsfasdfasdfadsfadfdafadfadfad{{content}}
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: {
      content: {
        type: String,
        default: function () {
          return {content: 'hello'}
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
