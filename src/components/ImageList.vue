<template>
    <div class="image-list" >
        <div class="image-list__image-holder" v-for="image in imageList" :key="image.author_id">
            <router-link :to="{name: 'ImageDetails', params: {title: image.title}, query:{...image}}">
                <img class="image-list__image-link" :src="image.img_src"/>
            </router-link>
            <div class="image-list__image-caption"><i :class="image.isFavourite && 'is-favourite'" @click="updateFavouriteImageListOnClick($event, image)" class="fas fa-heart"></i></div>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'ImageList',
    props: ['imageList'],

    data() {
        return {
            //isFavourite: {},
            //favoriteImageList: []
        }
    },

    methods: {
        updateFavouriteImageListOnClick(event, image) {
            image.isFavourite = !image.isFavourite
            this.$store.commit('handleFavouriteImages', image)
            console.log('favouriteImage: ', this.$store.state.favoriteImageList)
        }
    },

    created() {
        
        if(this.$store.state.imageList.length === 0) {
            console.log('API call')
            this.$store.dispatch('getImages')
        }
    },
}
</script>
