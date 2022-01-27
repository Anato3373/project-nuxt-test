<template>
<div class="block">
  <div class="form_block">
    <form @submit.prevent="checkForm()" class="add_form">
      <label for="name">Наименование товара<span v-if="form.name.length < 1"></span></label>
      <input
        type="text"
        id="name"
        placeholder="Введите наименование товара"
        class="add_form__input"
        v-model="form.name"
        :class="$v.form.name.$error ? 'invalid' : ''"
      />
      <span
        v-if="$v.form.name.$dirty && !$v.form.name.required"
        class="error-box">Поле является обязательным</span>
      <label for="description"
        >Описание товара<span v-if="form.description.length < 1"></span></label>
      <textarea
        class="add_form__txtar"
        placeholder="Введите описание товара"
        id="description"
        cols="30"
        rows="10"
        v-model="form.description"
        :class="$v.form.description.$error ? 'invalid' : ''"></textarea>
      <span
        v-if="$v.form.description.$dirty && !$v.form.description.required"
        class="error-box">Поле является обязательным</span>
      <label for="img">Ссылка на изображение товара<span v-if="form.img.length < 1"></span></label>
      <input
        class="add_form__input"
        id="img"
        placeholder="Введите ссылку"
        type="text"
        v-model="form.img"
        :class="$v.form.img.$error ? 'invalid' : ''"/>
      <span v-if="$v.form.img.$dirty && !$v.form.img.required" class="error-box"
        >Поле является обязательным</span>
      <span v-if="$v.form.img.$dirty && !$v.form.img.url" class="error-box"
        >Url неккоректный</span>
      <label for="price"
        >Цена товара<span v-if="form.price.length < 1"></span>
      </label>
      <input
        class="add_form__input"
        id="price"
        placeholder="Введите цену"
        type="text"
        v-text="splitNumber(form.price)"
        v-model="form.price"
        :class="$v.form.price.$error ? 'invalid' : ''"/>
      <span
        v-if="$v.form.price.$dirty && !$v.form.price.required"
        class="error-box"
        >Поле является обязательным</span>
      <span
        v-if="$v.form.price.$dirty && !$v.form.price.decimal"
        class="error-box"
        >Используйте только числа</span
      >
      <button
        class="add_form__btn"
        :disabled="$v.form.$error || !$v.form.name.required || !$v.form.description.required || !$v.form.img.required || !$v.form.price.required"
        type="submit"
      >
        Добавить товар
      </button>
    </form>
  </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, decimal, url } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: "",
        description: "",
        img: "",
        price: "",
      },
      
    };
  },
  computed: {
    getProducts() {
      return this.$store.getters["products"];
    },

  },
  methods: {
    postProduct() {
      this.$store.dispatch("postProduct", [
        this.form.name,
        this.form.description,
        this.form.img,
        this.form.price,
      ]);
    },
    loader() {
      this.$store.dispatch("loader");
    },
    clearInputs() {
      this.form.name = "";
      this.form.description = "";
      this.form.img = "";
      this.form.price = "";
    },
    checkForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        this.postProduct();
        this.clearInputs();
      }
    },
    splitNumber(value){
      if (value.length >= 1) {
        this.form.price = value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
      else{
        value
      }
    }
  },
  mounted() {
    this.loader();
  },
  validations: {
    form: {
      name: { required },
      description: { required },
      img: { required, url },
      price: { required, decimal },
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
  margin: 0 16px 0 0;
  display: flex;
}
.form_block {
  width: 100%;
  display: flex;
  position: fixed;
}
.add_form {
  @extend %input-style;
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
</style>
