/**
 * Created by kevin on 17/2/14.
 */
// es6 polyfill
import Icon from './component/icon'

let ystview = {
  Icon

};

const install = function (Vue, opts = {}) {

  Object.keys(ystview).forEach((key) => {
    Vue.component(key, iview[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign(ystview, {install});   // eslint-disable-line no-undef
