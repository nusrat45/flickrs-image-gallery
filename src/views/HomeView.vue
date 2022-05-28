<template>
    <div>
        <Header>
            <Dropdown :eventMethod="getImagesByLang">
                <option value="en-us">English</option>
                <option value="fr-fr">French</option>
                <option value="de-de">German</option>
                <option value="it-it">Italian</option>
                <option value="ko-kr">Korean</option>
                <option value="pt-br">Portuguese</option>
                <option value="es-us">Spanish</option>
                <option value="zh-hk">Chinese</option>
            </Dropdown>
        </Header>
        <main class="main">
            <div v-if="isLoading">
                <Loader />
            </div>
            <div v-else>
                <SearchByTag />
                <div class="filter-sort">
                    <div class="filter-sort__filter">
                        <FilterWithFav />
                    </div>
                    <div class="filter-sort__sort">
                        <SortByDate />
                    </div>
                </div>
            </div>
            
            
            <ImageList :imageList="imageList"/>
        </main>
        <Footer />
    </div>
</template>

<script>
import ImageList from '@/components/ImageList.vue';
import Header from '@/components/Header.vue';
import SearchByTag from '@/components/SearchByTag.vue';
import SortByDate from '../components/SortByDate.vue';
import FilterWithFav from '@/components/FilterWithFav.vue';
import Footer from '@/components/Footer.vue';
import Dropdown from '@/components/Dropdown.vue';
import Loader from '../components/Loader.vue';

export default {
    name: "HomeView",
    components: {
    ImageList,
    Header,
    SearchByTag,
    Footer,
    SortByDate,
    FilterWithFav,
    Dropdown,
    Loader
},

    computed: {
        imageList() {
            return this.$store.state.imageList
        },

        isLoading() {
            return this.$store.state.isLoading
        }
    },

    methods: {
        getImagesByLang(event) {
            this.$store.dispatch('getImages', {lang: event.target.value})
        }
    }
}
</script>
