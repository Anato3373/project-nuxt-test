<template>
  <div class="product">
    <section class="product-section" v-for="product in getProducts" :key="product.id">
      <div class="product-card">
        <img :src="product.img" alt="">
        <p class="title">{{ product.name }}</p>
        <p class="txt">{{ product.textarea }}</p>
        <span class="price">{{ product.price }}</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    getProducts() {
      return this.$store.getters['products']
    }
  },
};
</script>

<style lang="scss" scoped>
.product {
  height: 100%;
  width: 1400px;
  display: flex;
  flex-wrap: wrap;
}
.product-section{

  margin: 0 16px 16px 0;

}
.product-card{
  width: 332px;
  height: 423px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
</style>
