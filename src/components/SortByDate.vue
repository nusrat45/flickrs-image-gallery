<template lang="">
    <div class="sort-by-date">
        <div class="sort-by-date__title" @click="isOpen = !isOpen">
            <span class="btn sort-by-date__name" id="sort-by-date__name"><i class="fas fa-sort"></i> {{sortOptionName ? sortOptionName : 'Sort By '}}</span>
        </div>
         <div :class="!isOpen && 'is-hidden'" class="sort-by-date__dropdown" id="sort-by-date__dropdown">
            <ul class="sort-by-date__dropdown-list">
                <li class="sort-by-date__item" @click="[sortOptionName = 'Sort By', isOpen = false]">Default</li>
                <li class="sort-by-date__item" @click="[sortByDate($event, 'date_taken_raw'), sortOptionName = 'Taken Date',isOpen = false]">Taken Date</li>
                <li class="sort-by-date__item" @click="[sortByDate($event, 'published_raw'), sortOptionName = 'Published Date', isOpen = false]">Published Date</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SortByDate',
    
    data() {
        return {
            isOpen: false,
            sortOptionName: ''
        }
    },

    methods: {
        // toggle between sort by date taken and published date
        sortByDate(event, datetype) {
            this.$store.commit('sortByDate', datetype);
        },
    }
}
</script>
<style lang="">
    
</style>