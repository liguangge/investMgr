<template>
  <div id="app">
    <div class="header">
      <div class="tab">
        <router-link to="/">btnindex</router-link>
      </div>
      <div class="tab">
        <router-link to="/equity">btnequity</router-link>
      </div>
    </div>
    <transition name="slidetoright" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import header from 'components/header/header.vue'

  export default {
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    positive: relative
    width: 100%
    height: 50px
    display: flex
    border: 1px solid #333
    .tab
      flex: 1
      width: 50%

  .slidetoright-enter
    transform: translateX(-100%)

  slidetoright-leave-to
    transform: translateX(100%)

  .slidetoright-enter-active
    transition: all .8s ease
    translateX(0)

  .slidetoright-leave-active
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
    translateX(0)

  .slidetoleft-enter
    transform: translateX(100%)

  .slidetoleft-leave-to
    transform: translateX(0)

  .slidetoleft-enter-active
    transition: all .8s ease
    translateX(0)

  .slidetoleft-leave-active
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
    translateX(-100%)
</style>
