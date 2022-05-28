<template>
    <div className="search-by-tag">
        <Dropdown :eventMethod="getImagesOnTagMode">
            <option class="item" value="all">All</option>
            <option value="any">Any</option>
        </Dropdown>
        <span v-if="tags.length > 0">
            <span v-for="(tag, index) in tags" 
                :key="index"
                class="btn" 
                :class="tag.isChecked && 'is-checked'" 
                @click="toggleCheckedTag($event, tag)"
            >{{tag.name}}
            </span>
        </span>
        <div class="search-by-tag__add-tag">
            <input type="text"  
                class="search-by-tag__input"  
                :class="isShow ? '' : 'is-hidden'" 
                v-model.trim.lazy="tagName" 
                placeholder="Search By Tags..."
            />
            <span  @click="[isShow = true, addNewTag()]" 
                class="btn search-by-tag__add-tag-btn"
            >+ Add Tag
            </span>
        </div>        
    </div> 
</template>

<script>
import Dropdown from './Dropdown.vue';
export default {
    name: "SearchByTag",
    data() {
        return {
            tagName: "",
            isShow: false
        };
    },
    computed: {
        //All tags list
        tags() {
            return this.$store.state.tags;
        }
    },
    methods: {
        // Add new Tag click event function
        addNewTag() {
            console.log('????')
            if (this.isShow && this.tagName) {
                let newTag = {
                    name: this.tagName,
                    isChecked: true
                };
                this.$store.dispatch("handleTags", newTag);
                this.tagName = "";
            }
        },
        // Check uncheck tag click event function
        toggleCheckedTag(event, currentTag) {
            console.log('????')
            this.$store.dispatch("handleTags", currentTag);
        },
        // Get all images from api function
        getImages() {
            this.$store.dispatch("getImages");
        },

        getImagesOnTagMode(event) {
            this.$store.dispatch("getImagesOnTagMode", event.target.value)
        }
    },
    components: { Dropdown }
}
</script>
