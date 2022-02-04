import axios from "axios";

export const state = () => ({
  products: [],
  form: {
    title: "",
    description: "",
    img: "",
    price: "",
  },
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
    state.form.title = ""
    state.form.description = ""
    state.form.img = ""
    state.form.price = ""
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
  },
  TITLE_VALUE(state, val) {
    state.form.title = val
  },
  DESCRIPTION_VALUE(state, val) {
    state.form.description = val
  },
  IMG_VALUE(state, val) {
    state.form.img = val
  },
  PRICE_VALUE(state, val) {
    state.form.price = val
  },
}

export const actions = {
  async loader(ctx) {
    try {
      const {data} = await axios.get('https://test-task-23b17-default-rtdb.firebaseio.com/api.json')
      if (!data) {
        throw new Error('Список пуст')
      }
      ctx.commit('ADD_TO_PRODUCTS', {data})
    } catch (error) {
      console.log(error.message)
    }
  },
  removeProduct(ctx, id){
    axios.delete(`https://test-task-23b17-default-rtdb.firebaseio.com/api/${id}.json`)
      .then(() => {
        ctx.commit('REMOVE_PRODUCTS', id)
      })
  },
  async postProduct({commit, state}){
    await axios.post('https://test-task-23b17-default-rtdb.firebaseio.com/api.json', {
      title: state.form.title,
      description: state.form.description,
      img: state.form.img,
      price: state.form.price,
    }).then(() => {
      const array = {
        title: state.form.title,
        description: state.form.description,
        img: state.form.img,
        price: state.form.price,
      }
      commit('POST_TO_PRODUCTS', array)
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
