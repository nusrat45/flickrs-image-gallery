<template lang="">
    <div class="sort-by-date">
        <Dropdown :eventMethod="sortByDate" :customClass="'sort-icon'">
            <option value="date_taken_raw">Sort by: Taken Date</option>
            <option value="published_raw">Sort by: Published Date</option>
        </Dropdown>
    </div>
</template>
<script>
import Dropdown from './Dropdown.vue';
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
        sortByDate(event) {
            this.$store.commit('sortByDate', event.target.value);
        },
    },
    components: { Dropdown }
}
</script>
<style lang="">
    
</style>