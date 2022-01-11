<template>
<div>
  <Form/>
</div>
</template>

<script>
import Form from "@/components/Form"

export default {
  name: 'IndexPage',
  components: {
    Form: Form
  }
}
</script>

<style lang="scss" scoped>
  div {
    padding: 32px;
  }
</style>