<template>
    <Fragment>
        <div class="image-list">
            <div class="image-list__image-holder" v-for="(image, index) in imageList" :key="image.author_id + index">
                <router-link :to="{ name: 'imageDetails', params: {id: image.id, ...image}}">
                    <span class="image-list__view-wrapper">
                        <img class="image-list__image-link" :src="image.img_src"/> 
                    </span>
                </router-link>
                <div class="image-list__image-caption"><i :class="image.isFavourite && 'is-favourite'" @click="updateFavouriteImageListOnClick($event, image)" class="fas fa-heart"></i></div>
            </div> 
        </div>
         <!-- <div v-else class="fallback-image-holder">
            <img src="../assets/images/fallback_image.jpg"/>
            <div>No Image Availabe</div>
        </div>   -->
    </Fragment>
</template>

<script>
export default {
    name: 'ImageList',
    
    props: ['imageList'],

    methods: {
        updateFavouriteImageListOnClick(event, image) {
            image.isFavourite = !image.isFavourite
            this.$store.commit('handleFavouriteImages', image)
        }
    },

    created() {
        if(this.$store.state.imageList.length === 0) {
            console.log('API call')
            this.$store.dispatch('getImages')
            console.log(this.$store.state.imageList)
        }
    },
}
</script>
