<template>
  <div class="form_block">
    <form @submit.prevent="postProduct();clearInputs()" class="add_form">
      <label for="name">Наименование товара<span v-if="name.length<1"></span></label>
      <input
        type="text"
        id="name"
        placeholder="Введите наименование товара"
        class="add_form__input"
        v-model="name"
      />
      <label for="description">Описание товара<span v-if="description.length<1"></span></label>
      <textarea
        class="add_form__txtar"
        placeholder="Введите описание товара"
        id="description"
        cols="30"
        rows="10"
        v-model="description"
      ></textarea>
      <label for="img">Ссылка на изображение товара<span v-if="img.length<1"></span></label>
      <input
        class="add_form__input"
        id="img"
        placeholder="Введите ссылку"
        type="text"
        v-model="img"
      />
      <label for="price"
        >Цена товара<span v-if="price.length<1"></span>
      </label>
      <input
        class="add_form__input"
        id="price"
        placeholder="Введите цену"
        type="text"
        v-model="price"
      />
      <button class="add_form__btn"  type="submit">Добавить товар</button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      name: '',
      description: '',
      img: '',
      price: '',
    };
  },
  computed: {
    getProducts() {
      return this.$store.getters['products']
    },

  },
  methods: {
    postProduct() {
      this.$store.dispatch('postProduct', [this.name, this.description, this.img, this.price])
    },
    loader(){
      this.$store.dispatch('loader')
    },
    clearInputs(){
      this.name = ''
      this.description = ''
      this.img = ''
      this.price = ''
    }
  },
  mounted() {
    this.loader()
  },
  validations: {
    name: {
      length(value){
        return console.log(value)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
%input-style {
  background: #fffefb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  outline: none;
}

$font-source: "Source Sans Pro", sans-serif;
$font-inter: "Inter", sans-serif;
$input-padding: 10px 15px;
$input-margin: 0 0 16px 0;
.form_block{
  width: 332px;
  margin: 0 16px 0 0;
  display: flex;
}
.add_form {
  @extend %input-style;
  display: flex;
  flex-direction: column;
  padding: 24px;
  max-width: 282px;
  height: 440px;
  width: 100%;
  font-family: $font-source;
  & label {
    font-size: 10px;
    line-height: 0;
    letter-spacing: -0.02em;
    color: #49485e;
    margin: 0 0 4px 0;
    & span {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #ff8484;
      transform: translate(1px, -6px);
    }
  }
  &__input {
    @extend %input-style;
    padding: $input-padding;
    margin: $input-margin;
    font-family: $font-source;
  }
  &__txtar {
    @extend %input-style;
    padding: $input-padding;
    margin: $input-margin;
    font-family: $font-source;
    resize: none;
  }
  &__btn {
    @extend %input-style;
    padding: $input-padding;
    font-family: $font-inter;
    font-size: 12px;
    outline: none;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #b4b4b4;
    background: #eeeeee;
  }
}
</style>
