<template>
  <div class="equity">
    <div>equity
      <Icon name="icon-arrow_lift" :size="equitysize"></Icon>
      adfsffdfadsfadfdsafasdfadsfasdfadsfadsfadsfadsfadfasdfadsf
      {{subCompanys}}
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
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
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return false
          }
        },
        value1: ''
      }
    },
    created() {
//        this.$store.dispatch('getSubCompanys')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
</style>
