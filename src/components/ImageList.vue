<template>
    <div class="image-list-holder" >
        <div class="image-holder" v-for="image in imageList" :key="image.id">
             <router-link :to="{name: 'ImageDetails', params: {title: image.title}, query:{...image, imgSrc: image.media.m}}"><img class="image" :src="image.media.m"/></router-link>
        
            <div>{{image}}</div>
        </div> 
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ImageList',

    data() {
        return {
            imageList: []
        }
    },

    methods: {
        getImages() {
            axios('https://api.flickr.com/services/feeds/photos_public.gne?safe_search=1&format=json&nojsoncallback=1')
            .then(response => this.imageList = response.data.items)
        }
    },
    
    mounted() {
        this.getImages()
    },
    
    // computed: {
    //     getImageList() {
    //         return this.$store.state.imageList
    //     }
    // }
    
}
</script>
<style>
    
</style>