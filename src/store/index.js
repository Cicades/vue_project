import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    goodsList: {}  // 购物车记录 <goodsId>: <goodsCount>
  },
  mutations: {
    addGoods(state, [id, count]){
      id = id + ''
      id in state.goodsList ? state.goodsList[id] += count : Vue.set(state.goodsList, id, count)
    },
    updateGoods(state, [id, count]){
      state.goodsList[id] = count
    },
    delGoods(state, id){
      id += ''
      Vue.delete(state.goodsList, id)
    }
  },
  getters: {
    goodsSum(state){
      return Object.keys(state.goodsList).length
    },
    goodsIds(state){
      return Object.keys(state.goodsList).join(',')
    },
    'getCountById': state => id => state.goodsList[id]
  }
})

export default store
