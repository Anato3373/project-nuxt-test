<template>
  <div class="product">
    <section class="product-section" v-for="product in getProducts" :key="product.id">
      <div class="product-card" v-if="getProducts.length >= 1">
        <button class="del" @click="removeProduct(product.id)"><img src="../static/delete 1.png" alt=""></button>
        <img :src="product.img" class="product-img" alt="">
        <div class="title-box">
        <p class="title">{{ product.name }}</p>
        <p class="txt">{{ product.description }}</p>
        <span class="price">{{ product.price }}<span> руб.</span></span>
        </div>
      </div>
      <div v-else>Список товаров пуст</div>
    </section>
  </div>
</template>

<script>

export default {
  computed: {
    getProducts() {
      return this.$store.getters['products']
    },
  },
  methods: {
    removeProduct(id){
      this.$store.dispatch('removeProduct', id)
    },
    loader() {
      this.$store.dispatch("loader");
    },
  },
  mounted() {
    this.loader();
  },
};

</script>

<style lang="scss" scoped>
$margin: 0;

.product {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
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
  font-family: Source Sans Pro;
  color: #3F3F3F;
  position: relative;
  .del{
    display: none;
    width: 32px;
    height: 32px;
    background: #FF8484;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: absolute;
    top: -8px;
    right: -8px;
    cursor: pointer;
  }
  .product-img{
    border-radius: 4px 4px 0px 0px;
    width: 100%;
    height: 200px;
  }
}
.product-card:hover{
  .del{
    display: block;
  }
}
.title-box{
  box-sizing: border-box;
  height: 220px;
  display: flex;
  padding: 16px 16px 24px 16px;
  flex-direction: column;
  justify-content: space-between;

  .title{
    font-weight: 600;
    font-size: 20px;
    margin: $margin;
  }
  .txt{
    margin: $margin;
    font-size: 16px;
  }
  .price{
    margin: $margin;
    font-weight: 600;
    font-size: 24px;
  }
}
@media (max-width: 760px){
  .product-section{
    margin: 10px auto;
  }
}

</style>
