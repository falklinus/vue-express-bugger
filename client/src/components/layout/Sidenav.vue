<template>
  <nav>
    <ul class="projects-list">
      <li
        v-for="project in projects"
        :key="project.id"
        v-bind:class="{active: activeId===project.id}"
        v-on:click="redirectTo(`/app/projects/${project.id}`, project.id)"
      >{{project.title}}</li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import ProjectsService from "@/services/ProjectsService";

export default {
  name: "Sidenav",
  data() {
    return {
      projects: null,
      activeId: null
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    redirectTo(path, id) {
      this.activeId = id;
      this.$router.push(path);
    }
  },
  async mounted() {
    this.projects = (await ProjectsService.getUserProjects(this.user.id)).data;
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

.projects-list li {
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: background 0.1s ease-in-out;
}

.projects-list li:hover,
.projects-list li.active {
  background: #fff;
}
</style>
