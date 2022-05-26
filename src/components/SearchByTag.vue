<template lang="">
    <div className="search-by-tag">
        <span class="btn" @click="$store.dispatch('getImages')">All Tags</span>
        <span class="btn" v-if="tags.length > 0" v-for="(tag, index) in tags" :class="isChecked && 'is-checked'" @click="isCheckedFun(index)">{{tag}}</span>
        <div class="search-by-tag__add-tag">
            <input :class="isShow ? '' : 'is-hidden'" type="text" class="search-by-tag__input" placeholder="Search By Tags..." id="search-intput" v-model.trim.lazy="tagName"/>
            <span @click="[isShow = true, getTag()]" class="btn search-by-tag__add-tag-btn">+ Add Tag</span>
        </div>        
    </div> 
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            tagName: '',
            tags: [],
            isShow: false,
            isChecked: true,
            isChekcedList: []
        }
    },

    methods: {
        getTag() {
            console.log(this.isShow, this.tagName)
            if(this.isShow && this.tagName && this.tags.indexOf(this.tagName) === -1) {
                this.tags.push(this.tagName) 
                //this.isShow = false
                this.tagName = ''
            }
        },

        isCheckedFun(index1) {
            [index1] = !this.isChecked
        }
    },

    watch: {
        tagParamter(newVaule, oldValue) {
            
        }
    }
}
</script>

<style lang="scss">

</style>