<template>
    <Fragment>
        <Header />
        <main class="main">
            <div class="filter-sort">
                <div class="filter-sort__filter">
                    <FilterWithFav />
                </div>
            </div>
            <ImageList :imageList="favoriteImageList"/>  
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

export default {
    name: "FavoriteImageView",
    components: {
        ImageList,
        Header,
        SearchByTag,
        Footer,
        SortByDate,
        FilterWithFav
    },

    computed: {
        favoriteImageList() {
            return this.$store.state.favoriteImageList;
        }
    }
}
</script>
