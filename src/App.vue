<template>
  <div id="app">
    <div class="header">
      <div class="tab">
        <router-link to="/">btnindex</router-link>
      </div>
      <div class="tab">
        <router-link to="/equity">btnequity</router-link>
      </div>
      <div class="tab">
        <router-link to="/usermgr">usermgr</router-link>
      </div>
      <div class="approach" v-if="showanimation">
        dfadf
      </div>
    </div>
    <transition :name="transitionName" mode="out-in">
      <router-view class="viewclass"></router-view>
    </transition>

  </div>
</template>

<script>
  //  import header from 'components/header/header.vue'

  export default {
    created() {
      console.log('created')
      setTimeout(() => {
        this.showanimation = false
      }, 3000)
    },
    data () {
      console.log('1' + this.transitionName)
      return {
        transitionName: 'slide-left',
        showanimation: true
      }
    },
    watch: {
      '$route' (to, from) {
        let routerMap = {
          '/': 0,
          '/equity': 10,
          '/usermgr': 20
        }
        this.transitionName = routerMap[from.path] < routerMap[to.path] ? 'slide-left' : 'slide-right'
      }
    },
    components: {}
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
      text-align: center

  .approach
    position: absolute
    width: 100%;
    height: 100%;
    opacity: 1
    z-index: 100
    background: black

  .viewclass {
    position: absolute;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0
    transform: translate(30px, 0)
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    transform: translate(-30px, 0)
  }
</style>
