const mutations = {
  save (state, { id, list }) {
    state.lists[id] = list
  }
}

export default mutations
