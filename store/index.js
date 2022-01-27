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
  POST_TO_PRODUCTS(state, array){
    state.products.unshift(array)
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
        ctx.commit('REMOVE_PRODUCTS', this.state.products.filter(prod => prod.id !== id))
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
  }
}

export const getters = {
  products: state => state.products,
}
