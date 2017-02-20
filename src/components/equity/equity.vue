<template>
  <div class="equity">
    <div>equity
      <Icon name="icon-arrow_lift" :size="equitysize"></Icon>
      adfsffdfadsfadfdsafasdfadsfasdfadsfadsfadsfadsfadfasdfadsf
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Icon from 'ystui/icon'
  export default {
    components: {Icon},
    computed: {
      equitysize() {
        let size = 20
        return size
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
</style>
