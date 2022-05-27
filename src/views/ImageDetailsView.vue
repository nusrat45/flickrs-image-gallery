<template lang="">
    <Fragment>
        <Header />
        <main class="main">
            <div class="image-details">
                <div @click="goBack" class="btn back-btn"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</div>
                <div class="image-details__main-content">
                    <img class="image-details__img" :src="image.img_src"/>
                    <div class="image-details__text">
                        <div class="image-details__image-properties">
                                <h1 class="image-details__item">{{image.title.trim() ? image.title : 'No Title Available'}}</h1>
                                <div class="image-details__item">{{image.description ? image.description : ''}}</div>
                                <div class="image-details__item">Taken By: {{image.author ? image.author : 'No Author Available'}}</div>
                                <div class="image-details__item">Taken On: {{image.date_taken ? image.date_taken : 'No Date Avaiable'}}</div>
                                <div class="image-details__item">Published On: {{image.published ? image.published : 'No Date Avaiable'}}</div>
                                <div class="image-details__item">View on website: <a :href="image.link" target="_blank">{{image.link}}</a></div>
                        </div>
                        <div>
                            <div class="image-details__item">Tags:  <span class="btn" v-if="image.tags.length > 0" v-for="tag in image.tags">{{tag}}</span><span v-if="image.tags.length === 0">No Tags Available</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </Fragment>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'ImageDetailsView',
    
    components: {
        Header,
        Footer
    },
    data() {
        return {
            image: {
                img_src: this.$route.params.img_src,
                title: this.$route.params.title,
                description: this.$route.params.description,
                published: this.$route.params.published,
                author: this.$route.params.author,
                date_taken: this.$route.params.date_taken,
                link: this.$route.params.link,
                tags: this.$route.params.tags
            }
        }
    },

    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
   
}
</script>
