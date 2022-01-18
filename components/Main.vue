<template>
  <div class="main">
    <Form />
    <Products />
  </div>
</template>

<script>
import Form from "@/components/Form";
import Products from "@/components/Products.vue";

export default {
  components: {
    Form,
    Products,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Source+Sans+Pro:wght@400;600&display=swap");


.main {
  display: flex;
  padding: 32px;
  background: #e5e5e5;
}
</style>
