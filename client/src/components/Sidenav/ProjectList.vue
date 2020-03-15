<template>
  <div>
    <div class="project-list-header">
      <div class="left-section" v-on:click="listToggle">
        <div class="chevron-icon" v-bind:class="{right: !listHeaderActive}">
          <font-awesome-icon :icon="['fas', 'chevron-down']" style="color: gray;"/>
        </div>
        <h4>{{title}}</h4>
      </div>
      <div class="plus-icon">
        <div class="dash-horizontal"></div>
        <div class="dash-vertical"></div>
      </div>
    </div>
    <ul class="projects-list" v-bind:class="{hide: !listHeaderActive}">
      <li
        v-for="project in projects"
        :key="project.id"
        v-bind:class="{active: activeId===project.id && $route.path.search('projects') !== -1}"
        v-on:click="redirectTo(`/app/projects/${project.id}`, project.id)"
      >{{project.title}}</li>
    </ul>
    <!-- <div class="project-list-header">
      <div class="left-section" v-on:click="listToggle">
        <div class="chevron-icon" v-bind:class="{right: !listHeaderActive}">
          <font-awesome-icon :icon="['fas', 'chevron-down']" style="color: gray;"/>
        </div>
        <h4>Projects</h4>
      </div>
      <div class="plus-icon">
        <div class="dash-horizontal"></div>
        <div class="dash-vertical"></div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      //projects: null,
      activeId: null,
      listHeaderActive: true
    };
  },
  props: ["title", "projects"],
  methods: {
    redirectTo(path, id) {
      if (this.$route.path !== path) {
        this.activeId = id;
        this.$router.push(path);
      }
    },
    listToggle() {
      this.listHeaderActive = !this.listHeaderActive;
    }
  }
};
</script>

<style scoped>
.project-list-header {
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.project-list-header:hover {
  background: #f7f7f7;
}

.chevron-icon {
  transition: all 0.2s ease-in-out;
  margin-left: 0.5rem;
}

.chevron-icon.right {
  transform: rotate(-90deg);
}

.project-list-header .left-section {
  display: flex;
  flex-grow: 2;
  padding: 0.7rem 0;
}

.project-list-header .left-section h4 {
  margin-left: 1rem;
}

.plus-icon {
  width: 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  position: relative;
  padding: 1rem 0;
}

.plus-icon div {
  height: 1px;
  width: 1rem;
  background: gray;
  position: absolute;
}

.plus-icon:hover div {
  background: #333;
}

.plus-icon .dash-vertical {
  transform: rotate(90deg);
}

.projects-list {
  max-height: 2000px;
  overflow: hidden;

  transition: max-height 1.3s ease;
}

.projects-list.hide {
  max-height: 0;
  overflow: hidden;

  transition: max-height 0.3s ease;
}

.projects-list li {
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
}

.projects-list li:hover,
.projects-list li.active {
  background: #fff;
}
</style>
