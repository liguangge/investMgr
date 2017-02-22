<template>
  <div id="app">
    <div class="header" v-if="auth">
      <ul>
        <li class="n1">
          <router-link to="/">btnindex</router-link>
        </li>
        <li class="n2">
          <router-link to="/equity">btnequity</router-link>
        </li>
        <li class="n3">
          <router-link to="/usermgr">usermgr</router-link>
        </li>
        <li class="quebec">&nbsp;</li>
      </ul>
    </div>
    <div class="approach" v-if="loading">
      <ul class="spinner">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <transition :name="transitionName" mode="out-in">
      <router-view class="viewclass" :content="content"></router-view>
    </transition>

  </div>
</template>

<script>
  //  import header from 'components/header/header.vue'

  export default {
    props: {
      auth: {
        type: Boolean,
        default: function () {
          return true
        }
      }
    },
    created() {
      console.log('app created')
      this.$http.get('/api/initSubCompanys').then((response) => {
        response = response.body
        let subCompanys = response.data
        console.log(response.data)
        this.$store.dispatch('initSubCompanys', subCompanys)
      })
    },
    data () {
      return {
        transitionName: 'slide-left',
        loading: false,
        content: 'content test'
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
        this.content = routerMap[from.path] < routerMap[to.path] ? 'slide-left' : 'slide-right'
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @keyframes rota
      to {
        transform: rotate(360deg)
      }

    @keyframes opa {
      12.0% {
        opacity: 0.80
      }
      19.5% {
        opacity: 0.88
      }
      37.2% {
        opacity: 0.64
      }
      40.5% {
        opacity: 0.52
      }
      52.7% {
        opacity: 0.69
      }
      60.2% {
        opacity: 0.00
      }
      66.6% {
        opacity: 0.02
      }
      70.0% {
        opacity: 0.63
      }
      79.9% {
        opacity: 0.60
      }
      84.2% {
        opacity: 0.75
      }
      91.0% {
        opacity: 0.87
      }
    }
    .header
      positive: relative
      width: 100%
      height: 50px
      display: flex
      border: 1px solid #333
      ul
        positive: relative
        display: flex
        width: 100%
        li
          flex: 1
      .quebec
        position: absolute
        top: 20px
        left: -100px
        z-index: 3
        margin: 0
        border: 0
        width: 5px
        height: 5px
        padding: 0
        overflow: hidden
        background: #511d7f
        transition-property: left, width
        transition-duration: .5s
      .n1:hover ~ li.quebec
        left: 5px
        width: 110px
      .n2:hover ~ li.quebec
        left: 115px
        width: 110px
      .n3:hover ~ li.quebec
        left: 225px
        width: 110px
      .n4:hover ~ li.quebec
        left: 335px
        width: 110px
    .approach
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      opacity: 1
      z-index: 100
      background: black
      .spinner
        font-size: 100px /* 1em */
        width: 1em
        height: 1em
        margin: 100px auto
        position: relative
        list-style: none
        border-radius: 50%
        border: .01em solid rgba(150, 150, 150, 0.1) /* Subtle white line circling the dots */
        li
          width: .2em
          height: .2em
          position: absolute
          border-radius: 50%
        li:nth-child(1)
          background: #00C176 /* Blue */
          top: 0
          left: 50%
          margin-left: -.1em; /* Width/2 */
          transform-origin: 50% 250%
          animation: rota 1.13s linear infinite, opa 3.67s ease-in-out infinite alternate
        li:nth-child(2)
          background: #FF003C /* Red */
          top: 50%
          right: 0
          margin-top: -.1em /* Height/2 */
          transform-origin: -150% 50%
          animation: rota 1.86s linear infinite, opa 4.29s ease-in-out infinite alternate
        li:nth-child(3)
          background: #FABE28 /* Yellow */
          bottom: 0
          left: 50%
          margin-left: -.1em /* Width/2 */
          transform-origin: 50% -150%
          animation: rota 1.45s linear infinite, opa 5.12s ease-in-out infinite alternate
        li:nth-child(4)
          background: #88C100 /* Green */
          top: 50%
          left 0
          margin-top -.1em
          transform-origin: 250% 50%
          animation: rota 1.72s linear infinite, opa 5.25s ease-in-out infinite alternate

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
