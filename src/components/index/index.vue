<template>
  <div class="index">
    <div class="banner">fada</div>
    <div class="submenu">fad</div>
    <div class="doclist"></div>
    <nav id="landing" class="land-unactive" style="width: 100%;" v-if="shownav">
      <ul id="landing-items">
        <li>
          <a>
            <div class="before" style="background-color:#fbda52"></div>
            <header>
              <h1>
                <div style="">
                  test
                </div>
              </h1>
            </header>
          </a>
        </li>
      </ul>
    </nav>
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
    },
    data() {
      return {
        shownav: false
      }
    },
    created() {
//      this.$http.get('/api/getSubCompanys').then((response) => {
//        response = response.body
//        console.log(response.data)
//      })
      console.log('index created')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .index
    positive: relative
    width: 100%
    text-align: center
    .banner
      display: relative
      height: 360px
      width: 100%
      background: greenyellow
    .submenu
      height: 300px
      width: 1006px
      background: orangered
      margin: 0 auto
    .doclist
      width: 100%
      height: 400px
      background: blanchedalmond
  #landing
    width: 0
    height: 100%
    position: fixed
    right: 0
    top: 0
    overflow: hidden
    z-index: 4000
    .circle
      right: 0
      top: 0
      background-color: #fff
      transition: all .5s linear
      border-radius: 50%
      z-index: 1
      opacity: 1
      transform: translate(50%, -50%)
    ul
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      z-index: 2
      overflow: hidden
      li
        width: 33.33%
        height: 33.33%
        float: left
        position: relative
        overflow: hidden
        transition-duration: 400ms
    &.lang-unactive
      li:nth-of-type(1)
        transition-delay: 100ms
      li:nth-of-type(2)
        transition-delay: 150ms
      li:nth-of-type(3)
        transition-delay: 200ms
      li:nth-of-type(4)
        transition-delay: 100ms
      li:nth-of-type(5)
        transition-delay: 150ms
      li:nth-of-type(6)
        transition-delay: 150ms
      li:nth-of-type(7)
        transition-delay: 50ms
      li:nth-of-type(8)
        transition-delay: 100ms
      li:nth-of-type(9)
        transition-delay: 100ms;
    &.land-active
      li
        transform: translateY(0%)
        opacity: 1
        transition: all 0.4s ease-in-out
      li:nth-of-type(1)
        transition-delay: 250ms
      li:nth-of-type(2)
        transition-delay: 200ms
      li:nth-of-type(3)
        transition-delay: 100ms
      li:nth-of-type(4)
        transition-delay: 250ms
      li:nth-of-type(5)
        transition-delay: 200ms
      li:nth-of-type(6)
        transition-delay: 200ms
      li:nth-of-type(7)
        transition-delay: 250ms
      li:nth-of-type(8)
        transition-delay: 250ms
      li:nth-of-type(9)
        transition-delay: 250ms

    li .before
      position: absolute
      width: 20px
      height: 20px
      border-radius: 50%
      opacity: 0
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      transition: 0.4s ease-in-out
      header
        width: 100%
        height: 100%
        z-index: 4
        position: absolute
        top: 0
        left: 0
    li h1
      width: 100%
      height: 100%
      text-align: center
      position: relative
      div
        width: 100%
        height: 28%
        position: absolute
        overflow: hidden
      div:nth-of-type(1)
        top: 22%
        line-height: 100%
      div:nth-of-type(2)
        top: 50%

  #landing li span
    font-family: arial
    box-sizing: border-box
    height: 100%
    padding: 4% 0
    font-size: 40px
    font-weight: 400
    display: inline-block
    color: #fff
    transition: all 0.3s linear
    transform: translateY(100%)

  #landing li figure
    width: 100%
    height: 100%
    position: absolute
    left: 0
    top: 0
    z-index: 2
    transition: all 0.3s linear
    transform: translate(-10%, -32%) scale(0.6, 0.6)

  #landing figure img
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: auto

  #landing li:hover figure
    transform: translate(-10%, -32%) scale(0.55, 0.55)

  #landing li:hover span
    transform: translateY(0)

  #landing li:hover .before
    opacity: 0.9
    width: 600px
    height: 600px

</style>
