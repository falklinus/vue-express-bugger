<template>
  <div>
    <h2 v-if="project">{{project.title}}</h2>
    <h2 v-else>Loading...</h2>
  </div>
</template>

<script>
import ProjectsService from "@/services/ProjectsService";

export default {
  name: "Project-view",
  data() {
    return {
      project: null
    };
  },
  mounted() {
    this.fetchProject(this.$route.params.id);
  },
  watch: {
    "$route.params.id": function(id) {
      this.fetchProject(id);
    }
  },
  methods: {
    async fetchProject(id) {
      this.project = (await ProjectsService.getOne(id)).data;
    }
  }
};
</script>

<style scoped>
</style>
