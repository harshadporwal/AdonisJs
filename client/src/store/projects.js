// import router from '../router';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    projects: [],
    newProjectName: null,
  },
  actions: {
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
    }
  },
};
