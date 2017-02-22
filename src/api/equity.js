/**
 * Created by kevin on 17/2/21.
 */

/**
 * Mocking client-server processing
 */
// const _subCompanys = [
//   {'name': 1, 'url': 'module3_url1111'},
//   {'name': 2, 'url': 'module3_url22222'},
//   {'name': 3, 'url': 'module3_url33333'},
//   {'name': 4, 'url': 'module3_url44444'},
//   {'name': 5, 'url': 'module3_url55555'},
//   {'name': 6, 'url': 'module3_url66666'}
// ]

export default {
  getSubCompanys (cb) {
    // setTimeout(() => cb(_subCompanys), 100)
    console.log(this.$http)
    // Vue.http.get('/api/getSubCompanys').then((response) => {
    //   response = response.body
    //   let _subCompanys = response.data
    //   cb(_subCompanys)
    // })
  },

  addModules (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}

