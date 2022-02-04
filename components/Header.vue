<template>
  <div class="header">
    <p class="header-title">Добавление товара</p>
    <select v-model="selected" class="header-select" @click="sortArr(selected)">
      <option disabled value="">По умолчанию</option>
      <option value="ascending" >
        По возростанию цены
      </option>
      <option value="descending">
        По убыванию цены
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selected: ''
    }
  },
  methods: {
    sortArr(value){
      return this.$store.dispatch("sort", value)
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
}
.header-title{
  margin: 0 0 16px 0;
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 28px;
  color: #3F3F3F;
}
.header-select{
  outline: none;
  border: none;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 12px;
  padding: 0;
  height: 36px;
  text-align: center;
}
</style>
