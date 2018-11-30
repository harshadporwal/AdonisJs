<template>
  <v-layout row wrap>
    <v-flex xs9 class="text-xs-left">
      <slot></slot>
      <span @click="$emit('onClick')" v-if="!isEditMode">{{title}}</span>
      <v-text-field
        autofocus
        @keyup.enter="$emit('onSave')"
        v-if="isEditMode"
        :value="title"
        @input="$emit('onInput',$event)"
      ></v-text-field>
    </v-flex>
    <v-flex xs3 class="text-xs-right">
      <v-icon v-if="!isEditMode" @click="$emit('onEdit')">edit</v-icon>
      <v-icon v-if="isEditMode" @click="$emit('onSave')">check</v-icon>
      <v-icon @click="$emit('onDelete')">delete</v-icon>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["isEditMode", "title", "record"]
};
</script>

<style>
</style>
