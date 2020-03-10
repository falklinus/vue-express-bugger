<template>
  <div>
    <h2>Dashboard</h2>
    <div v-for="bug in bugs" :key="bug.id">
      <h4>{{bug.title}}</h4>
      <p>{{bug.description}}</p>
    </div>
  </div>
</template>

<script>
import BugsService from "@/services/BugsService";
export default {
  data() {
    return {
      bugs: null
    };
  },
  async mounted() {
    this.bugs = (await BugsService.index()).data;
  }
};
</script>

<style>
</style>
