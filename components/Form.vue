<template>
<div class="block">
  <div class="form_block">
    <form @submit.prevent="checkForm()" class="add_form">
      <label for="name">Наименование товара<span v-if="title.length < 1"></span></label>
      <input
        type="text"
        id="name"
        placeholder="Введите наименование товара"
        class="add_form__input"
        v-model="title"
        :class="{ invalid: nameError }"
        @blur="blurName = true"
      />
      <span
        v-if="nameError"
        class="error-box">Поле является обязательным</span>
      <label for="description"
        >Описание товара<span v-if="description.length < 1"></span></label>
      <textarea
        class="add_form__txtar"
        placeholder="Введите описание товара"
        id="description"
        cols="30"
        rows="10"
        v-model="description"
      ></textarea>

      <label for="img">Ссылка на изображение товара<span v-if="img.length < 1"></span></label>
      <input
        class="add_form__input"
        id="img"
        placeholder="Введите ссылку"
        type="text"
        v-model="img"
        :class="{ invalid: checkUrl }"
        @blur="blurUrl = true"
      />
      <span v-if="urlError" class="error-box"
        >Поле является обязательным</span>
      <span v-if="checkUrl" class="error-box"
        >Url неккоректный</span>
      <label for="price"
        >Цена товара<span v-if="price.length < 1"></span>
      </label>
      <input
        class="add_form__input"
        id="price"
        placeholder="Введите цену"
        type="text"
        v-model="price"
        :class="{ invalid: decimal }"
        @blur="blurPrice = true"
      />
      <span
        v-if="priceError"
        class="error-box"
        >Поле является обязательным</span>
      <span
        v-if="decimal"
        class="error-box"
        >Используйте только числа</span
      >
      <button
        class="add_form__btn"
        :disabled="disabledBtn"
        type="submit"
      >
        Добавить товар
      </button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blurPrice: false,
      blurName: false,
      blurUrl: false,
    };
  },
  computed: {
    title: {
      get() {
        return this.$store.state.form.title
      },
      set(val) {
        this.$store.commit('TITLE_VALUE', val)
      }
    },
    description: {
      get() {
        return this.$store.state.form.description
      },
      set(val) {
        this.$store.commit('DESCRIPTION_VALUE', val)
      }
    },
    img: {
      get() {
        return this.$store.state.form.img
      },
      set(val) {
        this.$store.commit('IMG_VALUE', val)
      }
    },
    price: {
      get() {
        return this.$store.state.form.price
      },
      set(val) {
        this.$store.commit('PRICE_VALUE', val)
      }
    },
    getProducts() {
      return this.$store.getters["products"];
    },
    disabledBtn(){
      return !(this.title
        && !this.checkUrl
        && !this.decimal
        && this.img
        && this.price)
    },
    priceError(){
      return this.blurPrice && !this.price
    },
    urlError(){
      return this.blurUrl && !this.img
    },
    nameError(){
      return this.blurName && !this.title
    },
    decimal(){
      return this.blurPrice && !/^[0-9]+$/.test(this.price)
    },
    checkUrl(){
      return this.blurUrl && !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/.test(this.img)
    }
  },
  methods: {
    checkForm() {
        this.postProduct()
        this.blurPrice = false
        this.blurName = false
        this.blurUrl = false
    },
    postProduct() {
      this.$store.dispatch("postProduct");
    },

  },
};
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
.block{
  width: 332px;
  height: 480px;
  margin: 0 16px 0 0;
  display: flex;
  flex-shrink: 0;
}
.form_block {
  width: 332px;
  display: flex;
  position: fixed;
}
.add_form {
  @extend %input-style;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  max-width: 282px;

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
    background: #7bae73;
    color: #ffffff;

    &:disabled {
      color: #b4b4b4;
      background: #eeeeee;
    }
  }
}
.error-box {
  padding: 0;
  margin: 0;
  font-size: 10px;
  color: #ff8484;
  transform: translate(0, -15px);
}
.invalid {
  border: 1px solid #ff8484;
}
.hide {
  display: none;
}
.enabled {
  background: #7bae73;
  color: #ffffff;
}
@media (max-width: 760px){
  .block{
    margin: 0 auto 10px;
  }
  .form_block{
    position: sticky;

  }
}
</style>
