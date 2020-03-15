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
    <div class="bug-container" v-for="bug in bugs" :key="bug.id">
      <h4>{{bug.title}}</h4>
      <p>{{bug.description}}</p>
    </div>
  </div>
</template>

<script>
import ProjectsService from "@/services/ProjectsService";
import BugsService from "@/services/BugsService";

export default {
  name: "Project-view",
  data() {
    return {
      project: null,
      bugs: null
    };
  },
  mounted() {
    this.fetchProject(this.$route.params.id);
    this.fetchBugs(this.$route.params.id);
  },
  watch: {
    "$route.params.id": function(id) {
      this.fetchProject(id);
      this.fetchBugs(id);
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

.bug-container {
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
}
</style>
