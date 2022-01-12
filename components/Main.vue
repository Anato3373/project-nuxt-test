<template>
  <div class="main">
    <Form />
    <Products />
  </div>
</template>

<script>
import Form from "@/components/Form";
import Products from "../components/Products.vue";

export default {
  components: {
    Form,
    Products,
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 32px;
//   height: 93vh;
  background: #e5e5e5;
}
</style>