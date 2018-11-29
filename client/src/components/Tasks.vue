<template>
  <Panel title="Tasks">
    <div class="task mt-2" v-for="task in tasks" :key="task.id">
      <EditableRecord
        :isEditMode="task.isEditMode"
        :title="task.description"
        @onInput="setTaskDescription({ task, description: $event})"
        @onEdit="setEditMode(task)"
        @onSave="saveTask(task)"
        @onDelete="deleteTask(task)"
      />
    </div>
    <CreateRecord
      placeholder="I need to..."
      @onInput="setNewTaskName"
      :value="newTaskName"
      @create="createTask"
    />
  </Panel>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import CreateRecord from "@/components/CreateRecord.vue";
import EditableRecord from "@/components/EditableRecord.vue";

export default {
  components: {
    CreateRecord,
    EditableRecord
  },
  computed: {
    ...mapState("tasks", ["tasks", "newTaskName"])
  },
  methods: {
    ...mapActions("tasks", ["createTask", "saveTask", "deleteTask"]),
    ...mapMutations("tasks", [
      "setNewTaskName",
      "setEditMode",
      "setTaskDescription"
    ])
  }
};
</script>

<style>
.task {
  font-size: 18px;
}
</style>
