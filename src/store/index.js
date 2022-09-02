import Vue from 'vue'
import Vuex from 'vuex'

import ProgressIndicator from "./progressIndicator"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    progressIndicator: ProgressIndicator
  }
})
