import { createStore } from 'vuex'

export default createStore({
  state: {
    mahasiswa: {
      nama: 'Nama Mahasiswa',
      ipk: '4.00',
      npm: '12345678'
    }
  },
  mutations: {
    setMahasiswa(state, payload) {
      state.mahasiswa = payload;
    }
  },
  actions: {
    updateMahasiswa({ commit }, mahasiswa) {
      commit('setMahasiswa', mahasiswa);
    }
  }
})