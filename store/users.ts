import axios from 'axios'
import { RootState, User } from '~/lib/types/types';

export const state = () => ({
  userList: []
})

export const mutations = {
  setUsers(state: RootState, userList: User[]) {
    state.userList = userList;
  },
  sortAlphabetically(state: RootState) {
    let userListCopy = state.userList;
    state.userList = userListCopy.sort((a, b) => (a.username > b.username) ? 1 : -1);
  },
  sortAlphabeticallyReverse(state: RootState) {
    let userListCopy = state.userList;
    state.userList = userListCopy.sort((a, b) => (a.username < b.username) ? 1 : -1);
  }
}

export const actions = {
  async getUsers ({ commit }: any) {
    const res = await axios.get('https://api.json-generator.com/templates/h1uUxN1LAsn6/data?access_token=6ylvgbh4ntna1b3hggjqx6ifhhrf8a7hika3kii2');
    commit( 'setUsers', res.data);
  }
}