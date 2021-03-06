import axios from 'axios'
import { createStore } from 'vuex'
import { arrayRemove, convertRawtoDefinedImageList, findAndReplaceArrayOfObj, STORAGE_KEY } from './helperFunctions'

export default createStore({
  state: {
    isLoading: true,
    imageList: [],
    allImageList: [],
    favoriteImageList: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
    tags: [],
    tagMode: 'all'
  },

  getters: {
    //Convert tags name array to string for tag query
    tagsParam: function(state) {
      let tags = [];
      state.tags.map(function(item) {
        if(item.isChecked) {
          tags.push(item['name']);
        }
      });
      return tags.join()
    }
  },

  mutations: {
    // Favourite images toggle
    handleFavouriteImages(state, image) {
      if(image.isFavourite) {
          state.favoriteImageList.push(image)
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state.favoriteImageList))
      } else {
          state.favoriteImageList = arrayRemove(state.favoriteImageList, image, 'id')
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state.favoriteImageList))
      }
    },

    //Add new tag if not exist, check-uncheck toggle tag 
    handleTags(state, payload) {
      let isExist = state.tags.find(item => item.name === payload.name);
      
      if(isExist) {
        state.tags = state.tags.map((item) => {
          if(item.name === payload.name) {
            return {
              ...item, 
              isChecked: !payload.isChecked
            };
          }
          return item
        })
      } else {
          state.tags.push(payload) 
      }
    },

    // Sort by date
    sortByDate(state, payload) {
      state.imageList.sort(function(a,b){
        return b[payload] - a[payload];
      });
    },

  },

  actions: {
    getImages(context, payload) {
      let url = ''
      
      if(payload) {
        console.log(payload.lang)
        let tagsQuery = payload.tagparams ? `tags=${payload.tagparams}&` : '';
        let tagModeQuery = payload.tagmode ? `tagmode=${payload.tagmode}&` : '';
        let langQuery = payload.lang ? `lang=${payload.lang}&` : '';
        url = 'https://api.flickr.com/services/feeds/photos_public.gne?'+tagsQuery+tagModeQuery+langQuery+'safe_search=1&format=json&nojsoncallback=1'
      } else {
        url = 'https://api.flickr.com/services/feeds/photos_public.gne?safe_search=1&format=json&nojsoncallback=1'
      }

      axios(url)
      .then(response => context.state.allImageList = convertRawtoDefinedImageList(response.data.items))
      .then(() => context.state.imageList = findAndReplaceArrayOfObj(context.state.allImageList, context.state.favoriteImageList, 'id'))
      .then(() => context.commit('sortByDate', 'date_taken_raw'))
      .then(() => context.state.isLoading = false)
    },

    // TagMode toggle with API Call
    getImagesOnTagMode(context, payload) {
      context.state.tagMode = payload
      context.dispatch("getImages", { tagmode: context.state.tagMode, tagparams: context.getters.tagparams});
    },

    // Call API with Tags Param
    handleTags(context, payload) {
      context.commit('handleTags', payload)
      context.dispatch('getImages', {tagmode: context.state.tagMode, tagparams: context.getters.tagsParam})
    }
  }
})
