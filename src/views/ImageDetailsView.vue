<template lang="">
    <div className="image-details">
        <router-link to="/"><div className="back-btn">Back</div></router-link>
        <div className="image-details__main-content">
            <img className="image-details__img" :src="imageInfo.imgSrc"/>
            <div className="image-details__text">
                <div className="image-details__image-properties">
                        <h1 className="image-details__item">{{imageInfo.title}}</h1>
                        <div className="image-details__item">Taken By: {{imageInfo.author}}</div>
                        <div className="image-details__item">Published On: {{imageInfo.published}}</div>
                        <div className="image-details__item">Date Taken: {{imageInfo.date_taken}}</div>
                </div>
                <div>
                    <div className="image-details__item">Tags:  <span className="image-details__tags" v-if="imageInfo.tags.length > 0" v-for="tag in imageInfo.tags">{{tag}}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ImageDetailsView',
    data() {
        return {
            imageInfo: {
                imgSrc: this.$route.query.imgSrc,
                title: this.$route.query.title,
                published: new Date(this.$route.query.published).toLocaleDateString(),
                author: this.$route.query.author,
                date_taken: new Date(this.$route.query.date_taken).toLocaleDateString(),
                tags: this.$route.query.tags ? this.$route.query.tags.split(' ') : []
            }
        }
    }
}
</script>
<style lang="">
    
</style>