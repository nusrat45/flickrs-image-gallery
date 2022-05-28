<template>
    <Fragment>
        <Header />
        <main class="main">
            <div v-if="favoriteImageList.length > 0">
                <div class="filter-sort">
                    <div class="filter-sort__filter">
                        <FilterWithFav />
                    </div>
                </div>
                <ImageList :imageList="favoriteImageList"/>  
            </div>
            <div v-else>
                <FallBack>
                    <h1>Hey!</h1>
                    <p>No Favourites Available.</p>
                    <p>Go back to all images and add some favourites :)</p>
                    <router-link class="btn" to="/">All Images</router-link>
                </FallBack>
            </div>
        </main>
        <Footer />
    </Fragment>
</template>

<script>
import Header from '@/components/Header.vue';
import ImageList from '@/components/ImageList.vue';
import SearchByTag from '@/components/SearchByTag.vue';
import SortByDate from '../components/SortByDate.vue';
import FilterWithFav from '@/components/FilterWithFav.vue';
import Footer from '@/components/Footer.vue';
import FallBack from '@/components/FallBack.vue';

export default {
    name: "FavoriteImageView",
    components: {
    ImageList,
    Header,
    SearchByTag,
    Footer,
    SortByDate,
    FilterWithFav,
    FallBack
},

    computed: {
        favoriteImageList() {
            return this.$store.state.favoriteImageList;
        }
    }
}
</script>
