<template lang="">
    <div class="sort-by-date">
        <div class="sort-by-date__title" @click="isOpen = !isOpen">
            <span class="btn sort-by-date__name" id="sort-by-date__name"><i class="fas fa-sort"></i> Sort By Date</span>
        </div>
         <div :class="!isOpen && 'close'" class="sort-by-date__dropdown" id="sort-by-date__dropdown">
            <ul class="sort-by-date__dropdown-list">
                <li class="sort-by-date__item" @click="sortByDate($event, 'date_taken_raw')">Sort By Taken Date</li>
                <li class="sort-by-date__item" @click="sortByDate($event, 'published_raw')">Sort By Published Date</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SortByDate',
    
    data() {
        return {
            isOpen: false
        }
    },

    methods: {
        sortByDate(event, datetype) {
            this.$store.state.imageList.sort(function(a,b){
                return b[datetype] - a[datetype];
            });
        }
    }
}
</script>
<style lang="">
    
</style>