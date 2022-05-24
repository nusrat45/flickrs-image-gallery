<template>
    <div class="image-list-holder" >
        <div class="image-holder" v-for="image in $store.state.imageList" :key="image.id">
             <router-link :to="{name: 'ImageDetails', params: {title: image.title}, query:{...image, imgSrc: image.media.m}}"><img class="image" :src="image.media.m"/></router-link>
        </div> 
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ImageList',

    created() {
        console.log('call from created page')
        if(this.$store.state.imageList.length === 0) {
            console.log('API call')
            this.$store.dispatch('getImages')
        }
    },
}
</script>
<style>
    
</style>