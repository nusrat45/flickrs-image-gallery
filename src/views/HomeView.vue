<template>
    <div>
        <Header />
        <main class="main">
            <SearchByTag />
            <div class="filter-sort">
                <div class="filter-sort__filter">
                    <FilterWithFav />
                </div>
                <div class="filter-sort__sort">
                    <SortByDate />
                </div>
            </div>
            <ImageList :imageList="$store.state.allImageList"/>
        </main>
        <Footer />
    </div>
</template>

<script>
import ImageList from '@/components/ImageList.vue';
import Header from '@/components/Header.vue';
import SearchByTag from '@/components/SearchByTag.vue';
import Footer from '@/components/Footer.vue';
import SortByDate from '../components/SortByDate.vue';
import FilterWithFav from '@/components/FilterWithFav.vue';

export default {
    name: "HomeView",
    components: {
        ImageList,
        Header,
        SearchByTag,
        Footer,
        SortByDate,
        FilterWithFav
    }
}
</script>
