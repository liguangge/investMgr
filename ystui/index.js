/**
 * Created by kevin on 17/2/14.
 */
// es6 polyfill
import Icon from './components/icon'

const ystview = {
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

module.exports = Object.assign(iview, {install});   // eslint-disable-line no-undef
