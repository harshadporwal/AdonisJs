// import router from '../router';
import Vue from 'vue';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    projects: [],
    newProjectName: null,
  },
  actions: {
    saveProject({
      commit
    }, project) {
      return HTTP().patch(`projects/${project.id}`, project)
        .then(() => {
          commit('unSetEditMode', project);
        });
    },

    deleteProject({
      commit
    }, project) {
      return HTTP().delete(`projects/${project.id}`, project)
        .then(() => {
          commit('removeProject', project);
        });
    },

    fetchProjects({
      commit
    }) {
      return HTTP().get('/projects')
        .then(({
          data
        }) => {
          commit('setProjects', data);
        });
    },
    createProjects({
      commit,
      state
    }) {
      return HTTP().post('/projects', {
          title: state.newProjectName,
        })
        .then(({
          data
        }) => {
          commit('appendProject', data);
          commit('setNewProjectName', null);
        });
    }
  },
  getters: {
    /* projects(state) {
      return state.projects;
    }, */
  },
  mutations: {
    setNewProjectName(state, name) {
      state.newProjectName = name;
    },
    appendProject(state, project) {
      state.projects.push(project);
    },
    setProjects(state, project) {
      state.projects = project;
    },
    setProjectTitle(state, {
      project,
      title
    }) {
      project.title = title;
    },
    setEditMode(state, project) {
      Vue.set(project, 'isEditMode', true);
    },
    unSetEditMode(state, project) {
      Vue.set(project, 'isEditMode', false);
    },
    removeProject(state, project) {
      state.projects.splice(state.projects.indexOf(project), 1);
    }
  },
};
