<template>
  <div>
    <section class="">
      <ProductItem />
    </section>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
export default {
  components: { ProductItem },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>