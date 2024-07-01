import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    userData: localStorage.getItem('userData') || null
  }),
  getters: {
    user: state => {
      if (state.userData) {
        return JSON.parse(state.userData);
      }
      return state.userData;
    },
    userIsAuth: state => !state.token
  },
  actions: {
    storeLoggedInUser(userData: object, token: string) {
      const _this = this;

      localStorage.setItem('token', token);

      const stringifiedUserData = JSON.stringify(userData);
      localStorage.setItem('userData', stringifiedUserData);

      _this.token = token;
      _this.userData = stringifiedUserData;
    }
  }
});
