export default {
  state: {
    currentInstance: 'https://invidio.us',
    instances: [
      'https://invidio.us',
      'https://invidious.snopyta.org',
      'https://invidiou.sh',
      'https://invidious.ggc-project.de',
      'https://yewtu.be',
      'https://invidious.toot.koeln'
    ]
  },
  getters: {
    currentInstance(state) {
      return state.currentInstance
    },
    instances(state) {
      return state.instances
    }
  },
  mutations: {
    changeInstance(state, instance) {
      state.currentInstance = instance
    }
  }
}
