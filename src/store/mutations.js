const mutations = {
  save (state, { id, list }) {
    state.lists[id] = list
  },
  changePagination (state, payload) {
    state.pagination.total = state.pagination.total + 1
  }
}

export default mutations
