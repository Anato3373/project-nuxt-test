import axios from "axios";

export const state = () => ({
  products: [],
})

export const mutations = {
  ADD_TO_PRODUCTS(state, {data}) {
    state.products = Object.keys(data).map(key => {
      return {
        id: key,
        ...data[key]
      }
    })
  }
}

export const actions = {
  loader(ctx) {
    setTimeout(async () => {
      try {
        const {data} = await axios.get('https://test-task-23b17-default-rtdb.firebaseio.com/api.json')
        ctx.commit('ADD_TO_PRODUCTS', {data})
      } catch (error) {
        console.log(error)
      }
    }, 0)
  },
}

export const getters = {
  products: state => state.products
}
