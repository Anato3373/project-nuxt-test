<template>
  <div class="main">
    <Header/>
    <div class="main-page">
      <Form />
      <Products />
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form";
import Products from "@/components/Products.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    Form,
    Products,
    Header,
  },
};
</script>

<style>
@import url('../static/style.scss');
</style>
