import axios from 'axios'
import { createStore } from 'vuex'

function convertRawtoDefinedImageList(rawImageList) {
  let definedImageList = [];

  rawImageList.forEach((rawImage, index) => {
      let definedImage = {};
      definedImage['img_src'] = rawImage.media.m
      definedImage['title'] = rawImage.title
      definedImage['img_link'] = rawImage.img_link
      definedImage['description'] = rawImage.description.replace(/<[^>]+>/g, '').trim()
      definedImage['published_raw'] = new Date(rawImage.published)
      definedImage['published'] = new Date(rawImage.published).toLocaleDateString()
      definedImage['author'] = rawImage.author
      definedImage['author_id'] = rawImage.author_id
      definedImage['date_taken_raw'] = new Date(rawImage.date_taken)
      definedImage['date_taken'] = new Date(rawImage.date_taken).toLocaleDateString()
      definedImage['tags'] =  rawImage.tags ? rawImage.tags.split(' ') : []
      definedImage['isFavourite'] = false
      definedImageList.push(definedImage)
  })

  return definedImageList;
}

function arrayRemove(arr, ditem) {
  return arr.filter(function(item){
    return item.author_id != ditem.author_id;
  });
  
}

export default createStore({
  state: {
    imageList: [],
    allImageList: [],
    favoriteImageList: [],
  },

  getters: {
  },

  mutations: {
    handleFavouriteImages(state, image) {
      if(image.isFavourite) {
          state.favoriteImageList.push(image)
      } else {
          state.favoriteImageList = arrayRemove(state.favoriteImageList, image)
      }
    },

    toggleImages(state, type) {
        if(type === 'favorite') {
          state.imageList = state.favoriteImageList
        } else {
          state.imageList = state.allImageList
        }
    }
    
  },

  actions: {
    getImages({state}) {
      axios('https://api.flickr.com/services/feeds/photos_public.gne?safe_search=1&format=json&nojsoncallback=1')
      .then(response => state.allImageList = convertRawtoDefinedImageList(response.data.items))
      .then(() => state.imageList = state.allImageList)
    }
  },

  modules: {
  }
})
