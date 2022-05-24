<template>
    <div>
        <Header />
        <Search />
        <ImageList>
           
        </ImageList>
    </div>
</template>
<script>

import ImageList from '@/components/ImageList.vue';
import Header from '@/components/Header.vue';
import Search from '@/components/Search.vue';

export default {
    name: "HomeView",
    components: { ImageList, Header, Search }
}
</script>
<style lang="">
    
</style>