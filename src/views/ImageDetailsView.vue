<template lang="">
    <div>
        <Header />
        <div class="image-details">
            <router-link to="/"><div class="btn back-btn"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</div></router-link>
            <div class="image-details__main-content">
                <img class="image-details__img" :src="imageInfo.img_src"/>
                <div class="image-details__text">
                    <div class="image-details__image-properties">
                            <h1 class="image-details__item">{{imageInfo.title.trim() ? imageInfo.title : 'No Title Available'}}</h1>
                            <div class="image-details__item">Taken By: {{imageInfo.author ? imageInfo.author : 'No Author Available'}}</div>
                            <div class="image-details__item">Published On: {{imageInfo.published ? imageInfo.published : 'No Date Avaiable'}}</div>
                            <div class="image-details__item">Date Taken: {{imageInfo.date_taken ? imageInfo.date_taken : 'No Date Avaiable'}}</div>
                    </div>
                    <div>
                        <div class="image-details__item">Tags:  <span class="btn" v-if="imageInfo.tags.length > 0" v-for="tag in imageInfo.tags">{{tag}}</span><span v-if="imageInfo.tags.length === 0">No Tags Available</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    name: 'ImageDetailsView',
    data() {
        return {
            imageInfo: {
                img_src: this.$route.query.img_src,
                title: this.$route.query.title,
                published: this.$route.query.published,
                author: this.$route.query.author,
                date_taken: this.$route.query.date_taken,
                tags: this.$route.query.tags
            }
        }
    },
    components: {Header}
}
</script>
