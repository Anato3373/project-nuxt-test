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

<style lang="scss" scoped>
.main {
  display: flex;
  padding: 32px;
  background: #e5e5e5;
  justify-content: space-between;
}
</style>