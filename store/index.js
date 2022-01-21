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
    state.products.reverse()
  },
  REMOVE_PRODUCTS(state, arr) {
    state.products = arr
  },
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
  removeProduct(ctx, id){
    axios.delete(`https://test-task-23b17-default-rtdb.firebaseio.com/api/${id}.json`)
      .then(res => {
        ctx.commit('REMOVE_PRODUCTS', this.state.products.filter(prod => prod.id !== id))
      })
  }
}

export const getters = {
  products: state => state.products,
}
