<template>
  <div>
    <div v-if="!editing" class="container not-editing" v-on:click="setEditing(true)">
      <div class="plus-icon">
        <div class="dash-horizontal"></div>
        <div class="dash-vertical"></div>
      </div>
      <p class="placeholder-text">Add new bug</p>
    </div>
    <div v-if="editing" class="container editing">
      <div class="main">
        <div class="title">
          <label for="title">Title</label>
          <br>
          <input type="text" class="input" v-focus id="title" v-model="title">
        </div>
        <div class="desc">
          <label for="desc">Description</label>
          <br>
          <textarea type="text" class="input" id="desc" v-model="description"></textarea>
        </div>
      </div>
      <div class="cta">
        <button class="btn btn-primary" v-on:click="handleSubmit">Add bug</button>
        <p class="cancel" v-on:click="setEditing(false)">Cancel</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewBug",
  data() {
    return {
      editing: false,
      title: "Title",
      description: "Desc"
    };
  },
  props: { newBugEditing: Boolean },
  mounted() {
    this.editing = this.newBugEditing;
  },
  watch: {
    newBugEditing: function(newState) {
      console.log(newState);
      this.editing = newState;
    }
  },
  methods: {
    setEditing(option) {
      this.editing = option;
    },
    handleSubmit() {
      console.log(this.title, this.description);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.plus-icon {
  width: 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  padding: 1rem 0;
  position: relative;
}

.plus-icon div {
  height: 1px;
  width: 1rem;
  background: gray;
  position: absolute;
}

.plus-icon .dash-vertical {
  transform: rotate(90deg);
}

.placeholder-text {
  margin-left: 1rem;
  color: grey;
}

.not-editing:hover .placeholder-text {
  color: #333;
}
.not-editing:hover .plus-icon div {
  background: #333;
}

.editing {
  display: block;
}

.main {
  margin-bottom: 0.5rem;
}

.input {
  outline: none;
  border: 1px solid #ddd;
  padding: 2px 0.5rem;
  border-radius: 0.2rem;
}

.desc {
  flex-grow: 1;
}

.desc textarea {
  width: 100%;
  max-width: 100%;
  min-height: 2rem;
}

.cta {
  display: flex;
  align-items: center;
}

.cancel {
  margin-left: 1rem;
}

.cancel:hover {
  text-decoration: underline;
}
</style>
