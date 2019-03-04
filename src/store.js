import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 1,
    targets: [{
      name: 'Scarecrow',
      imgUrl: 'https://thumbs.gfycat.com/PastCookedCuscus-max-1mb.gif',
      hp: 100
    }, {
      name: 'Joker',
      hp: 120,
      imgUrl: 'https://media.giphy.com/media/vPA5iSKfAxAQ0/giphy.gif'
    }]
  },
  mutations: {
    attackM(state, data) {
      state.targets[data.index].hp -= data.value
      if (state.targets[data.index].hp < 0) {
        state.targets[data.index].hp = 0
      }
    }
  },
  actions: {
    attack({ commit, dispatch }, data) {
      commit('attackM', data)
    }
  }
})
