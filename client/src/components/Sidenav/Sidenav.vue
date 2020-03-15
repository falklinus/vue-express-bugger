<template>
  <nav>
    <ProjectList title="My projects" v-bind:projects="myProjects"/>
    <ProjectList title="Shared with me" v-bind:projects="sharedProjects"/>
  </nav>
</template>

<script>
import ProjectList from "./ProjectList.vue";
import ProjectsService from "@/services/ProjectsService";
export default {
  name: "Sidenav",
  data() {
    return {
      myProjects: null,
      sharedProjects: null
    };
  },
  components: { ProjectList },
  async mounted() {
    this.myProjects = (await ProjectsService.getMyProjects()).data;
    this.sharedProjects = (await ProjectsService.getSharedProjects()).data;
  }
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
