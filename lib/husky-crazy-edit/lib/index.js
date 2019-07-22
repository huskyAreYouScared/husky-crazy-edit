import main from './main.vue'

const huskyCrazyEdit = {
  install (Vue, options) {
    Vue.component('husky-crazy-edit', main)
  }
}

export default huskyCrazyEdit
