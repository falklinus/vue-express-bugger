<template>
  <div class="container">
    <h4>{{bug.title}}</h4>
    <p>{{bug.description}}</p>
  </div>
</template>

<script>
export default {
  name: "Bug",
  props: ["bug"]
};
</script>

<style scoped>
.container {
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
}
</style>
