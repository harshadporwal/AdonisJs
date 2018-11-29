<template>
  <Panel title="Projects">
    <div v-for="project in projects" :key="project.id">{{project.title}}</div>
    <v-layout row wrap>
      <v-flex xs8>
        <v-text-field
          placeholder="My project name..."
          @input="setNewProjectName"
          :value="newProjectName"
        ></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-btn @click="createProjects" color="green" class="mr-2" dark>
          <v-icon class="mr-2">add_circle</v-icon>Create
        </v-btn>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("projects", ["newProjectName", "projects"])
  },
  methods: {
    ...mapMutations("projects", ["setNewProjectName"]),
    ...mapActions("projects", ["createProjects"])
  }
};
</script>

<style>
</style>
