<template>
    <div>
        <Header />
        <div class="filter__toggle-favorite-image">
                    <div class="btn">
                        <router-link to="/">All</router-link>|
                        <router-link :to="{name: 'FavoriteImageView'}"><i class="fa fa-heart" aria-hidden="true"></i></router-link>
                    </div>
                    <!-- <div class="btn" @click="$store.commit('toggleImages', 'all')">all images</div>
                    <div class="btn" @click="$store.commit('toggleImages', 'favorite')">favourite images</div> -->
                </div>
        <ImageList v-if="$store.state.favoriteImageList.length > 0" :imageList="$store.state.favoriteImageList"/>
        <div v-else>No Favorites Availabe</div>    
        <Footer />
    </div>
</template>

<script>
import ImageList from '@/components/ImageList.vue';
import Header from '@/components/Header.vue';
import SearchByTag from '@/components/SearchByTag.vue';
import Footer from '@/components/Footer.vue';
import SortByDate from '../components/SortByDate.vue';

export default {
    name: "FavoriteImageView",
    components: {
    ImageList,
    Header,
    SearchByTag,
    Footer,
    SortByDate
}
}
</script>
