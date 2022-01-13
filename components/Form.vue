<template>
  <div class="form_block">
    <form action="" class="add_form">
      <label for="name">Наименование товара<span></span></label>
      <input
        type="text"
        id="name"
        placeholder="Введите наименование товара"
        class="add_form__input"
      />
      <label for="textarea">Описание товара<span></span></label>
      <textarea
        class="add_form__txtar"
        placeholder="Введите описание товара"
        id="textarea"
        cols="30"
        rows="10"
      ></textarea>
      <label for="img">Ссылка на изображение товара<span></span></label>
      <input
        class="add_form__input"
        id="img"
        placeholder="Введите ссылку"
        type="text"
      />
      <label for="price"
        >Цена товара<span v-bind:class="{ hide: changeClass }"></span
      ></label>
      <input
        class="add_form__input"
        id="price"
        placeholder="Введите цену"
        type="text"
        v-model="inputText"
      />
      <button class="add_form__btn">Добавить товар</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      visability: false,
    };
  },
  computed: {
    changeClass() {
      return this.inputText === '' ? this.visability : !this.visability;
    },
  },
};
</script>

<style lang="scss" scoped>
%input-style {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
}

$font-source: "Source Sans Pro", sans-serif;
$font-inter: "Inter", sans-serif;
$input-padding: 10px 16px;
$input-margin: 0 0 33px 0;

.add_form {
  @extend %input-style;
  display: flex;
  flex-direction: column;
  padding: 24px;
  float: left;
  max-width: 332px;
  width: 100%;
  font-family: $font-source;
  & label {
    font-size: 10px;
    line-height: 13px;
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
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #b4b4b4;
    background: #eeeeee;
  }
}

.hide {
  visibility: hidden;
}
</style>