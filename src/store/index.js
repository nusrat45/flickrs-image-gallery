import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    imageList: []
  },

  getters: {
  },

  mutations: {
  },

  actions: {
    getImages({state}) {
      axios('https://api.flickr.com/services/feeds/photos_public.gne?safe_search=1&format=json&nojsoncallback=1')
      .then(response => state.imageList = response.data.items)
    }
  },

  modules: {
  }
})
