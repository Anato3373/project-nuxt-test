<template>
  <div>
    <form action="" class="add_form">
        <input type="text" placeholder="Введите наименование товара" class="add_form__input">
        <textarea class="add_form__txtar" placeholder="Введите описание товара" name="" id="" cols="30" rows="10"></textarea>
        <input class="add_form__input" placeholder="Введите ссылку" type="text">
        <input class="add_form__input" placeholder="Введите цену" type="text">
        <button class="add_form__btn">Добавить товар</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
%input-style {
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
}
$input-padding: 10px 16px;
$input-margin: 0 0 33px 0;
.add_form{
    @extend %input-style;
    display: flex;
    flex-direction: column;
    padding: 24px;
    float: left;
    max-width: 332px;
    .add_form__input{
        @extend %input-style;
        padding: $input-padding;
        margin: $input-margin;
    }
    .add_form__txtar{
        @extend %input-style;
        padding: $input-padding;
        margin: $input-margin;
    }
    .add_form__btn{
        @extend %input-style;
        padding: $input-padding;
        margin: $input-margin;
    }
}
</style>