<template>
  <div class="equity">
    <div>equity
      <Icon name="icon-arrow_lift" :size="equitysize"></Icon>
      adfsffdfad
      <year-table
        ref:year-table
        v-show="currentView === 'year'"
        :year="year"
        :date="date"
        :selection-mode="selectionMode"
        :disabled-date="disabledDate"
        @on-pick="handleYearPick"
        @on-pick-click="handlePickClick"></year-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Icon from 'ystui/icon'
  import YearTable from 'ystui/date-picker/base/year-table'
  import {initTimeDate} from 'yst/assist'

  export default {
    data() {
      return {
        prefixCls: 'ivu-picker-panel',
        datePrefixCls: 'ivu-date-picker',
        shortcuts: [],
        currentView: 'year',
        date: initTimeDate(),
        value: '',
        showTime: false,
        selectionMode: 'day',
        disabledDate: '',
        year: null,
        month: null,
        confirm: false,
        isTime: false,
        format: 'yyyy-MM-dd'
      }
    },
    methods: {
      handleYearPick(year, close = true) {
        this.year = year
        if (!close) return

        this.date.setFullYear(year)
        if (this.selectionMode === 'year') {
          this.$emit('on-pick', new Date(year, 0, 1))
        } else {
          this.currentView = 'month'
        }

        this.resetDate()
      },
      resetDate () {
        this.date = new Date(this.date)
      }
    },
    created() {
      console.log('created equity')
    },
    components: {Icon, YearTable},
    computed: {
      equitysize() {
        let size = 20
        return size
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
