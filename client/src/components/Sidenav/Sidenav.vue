<template>
  <nav>
    <ProjectList/>
  </nav>
</template>

<script>
import ProjectList from "./ProjectList.vue";
export default {
  name: "Sidenav",
  components: { ProjectList }
};
</script>

<style scoped>
nav {
  border-right: 1px solid var(--light-border-color);
  background: #fafafa;
  height: calc(100vh - 3rem);
  padding-top: 2rem;
  padding-left: 0.5rem;
}
</style>
