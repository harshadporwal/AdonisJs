import router from '../router';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    registerEmail: 'hello',
    registerPassword: 'world',
    registerError: null,
    token: null,
    loginEmail: 'hello',
    loginPassword: 'world',
    loginError: null,
  },
  actions: {
    logout({
      commit
    }) {
      commit('setToken', null);
      router.push('/login');
    },

    login({
      commit,
      state
    }) {
      commit('setLoginError', null);
      return HTTP().post('/auth/login', {
          email: state.loginEmail,
          password: state.loginPassword,
        })
        .then(({
          data
        }) => {
          commit('setToken', data.token);
          router.push('/');
        })
        .catch(() => {
          commit('setLoginError', 'An has occured trying to login.');
        });
    },
    register({
      commit,
      state
    }) {
      commit('setRegisterError', null);
      return HTTP().post('/auth/register', {
          email: state.registerEmail,
          password: state.registerPassword,
        })
        .then(({
          data
        }) => {
          commit('setToken', data.token);
          router.push('/');
        })
        .catch(() => {
          commit('setRegisterError', 'An has occured trying to create your account.');
        });
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRegisterError(state, error) {
      state.registerError = error;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
    setLoginError(state, error) {
      state.loginError = error;
    },
    setLoginEmail(state, email) {
      state.loginEmail = email;
    },
    setLoginPassword(state, password) {
      state.loginPassword = password;
    },
  },

};
