<template>
  <div>
    <div class="project-header">
      <div class="project-title">
        <h2 v-if="project">{{project.title}}</h2>
        <h2 v-else>Loading...</h2>
      </div>
      <div class="project-cta">
        <div class="ellipsis">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
    <new-bug :newBugEditing="newBugEditing"/>
    <Bug v-for="bug in bugs" :key="bug.id" :bug="bug"/>
  </div>
</template>

<script>
import ProjectsService from "@/services/ProjectsService";
import BugsService from "@/services/BugsService";
import Bug from "./Bug.vue";
import NewBug from "./NewBug.vue";

export default {
  name: "Project-view",
  components: { Bug, NewBug },
  data() {
    return {
      project: null,
      bugs: null,
      newBugEditing: false
    };
  },
  mounted() {
    const projectId = this.$route.params.id;
    if (projectId) {
      this.fetchProject(projectId);
      this.fetchBugs(projectId);
    }
  },
  watch: {
    "$route.params.id": function(projectId) {
      console.log(projectId);
      if (projectId) {
        this.fetchProject(projectId);
        this.fetchBugs(projectId);
        this.newBugEditing = false;
        console.log(this.newBugEditing);
      }
    }
  },
  methods: {
    async fetchProject(projectId) {
      this.project = (await ProjectsService.getOne(projectId)).data;
    },
    async fetchBugs(projectId) {
      this.bugs = (await BugsService.index(projectId)).data;
    }
  }
};
</script>

<style scoped>
.project-header {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
}

.project-title {
  /* pointer-events: none; */
}

.project-cta {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.fa-icon {
  cursor: pointer;
  margin: 0 0.5rem;
  font-size: 18px;
}

.ellipsis {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0;
}
.dot {
  height: 5px;
  width: 5px;
  border: 1px solid grey;
  border-radius: 50%;
  margin-left: 1px;
}

.ellipsis:hover .dot {
  border-color: #333;
}
</style>
