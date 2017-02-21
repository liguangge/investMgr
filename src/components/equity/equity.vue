<template>
  <div class="equity">
    <div>equity
      <Icon name="icon-arrow_lift" :size="equitysize"></Icon>
      adfsffdfadsfadfdsafasdfadsfasdfadsfadsfadsfadsfadfasdfadsf
      {{subCompanys}}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import Icon from 'ystui/icon'
  export default {
    components: {Icon},
    computed: {
      ...mapGetters({
        subCompanys: 'subCompanys'
      }),
      equitysize() {
        let size = 20
        return size
      }
    },
    created() {
        this.$store.dispatch('getSubCompanys')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
</style>
