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
  REMOVE_PRODUCTS(state, id) {
    const arr = state.products.filter(prod => prod.id !== id)
    state.products = arr
  },
  POST_TO_PRODUCTS(state, array){
    state.products.unshift(array)
  },
  FILTER(state, value){
    const filteredProd = this.state.products.sort((a, b) => {
      if (value === 'ascending') {
        return a.price - b.price
      } else if (value === 'descending') {
        return b.price - a.price
      }
      return state.products
    })
    state.products = filteredProd
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
  removeProduct(ctx, id){
    axios.delete(`https://test-task-23b17-default-rtdb.firebaseio.com/api/${id}.json`)
      .then(() => {
        ctx.commit('REMOVE_PRODUCTS', id)
      })
  },
  postProduct(ctx,[name, description, img, price]){
    axios.post('https://test-task-23b17-default-rtdb.firebaseio.com/api.json', {
      name: name,
      description: description,
      img: img,
      price: price,
    }).then(() => {
      const array = {
        name: name,
        description: description,
        img: img,
        price: price,
      }
      ctx.commit('POST_TO_PRODUCTS', array)
    }).catch(error => {
      console.log(error)
    })
  },
  sort(ctx, value) {
    ctx.commit('FILTER', value)
  },
}

export const getters = {
  products: state => state.products,
}
