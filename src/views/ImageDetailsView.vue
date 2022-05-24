<template lang="">
    <div className="country-details">
        <router-link to="/"><div className="back-btn">Back</div></router-link>
        <div className="country-details__main-content">
            <img className="country-details__img" :src="imageInfo.imgSrc"/>
            <div className="country-details__text">
                <h2></h2>
                <div className="country-details__country-properties">
                    <div className="country-details__country-properties-left">
                        <div className="country-details__country-property">Title: {{imageInfo.title}}</div>
                        <div className="country-details__country-property">description: {{imageInfo.author_id}}</div>
                        <div className="country-details__country-property">published: {{imageInfo.published}}</div>
                        <div className="country-details__country-property">author: {{imageInfo.author}}</div>
                        <div className="country-details__country-property">date_taken: {{imageInfo.date_taken}}</div>
                    </div>
                    <!-- <div className="country-details__country-properties-right">
                        <div className="country-details__country-property">Top Level Domain: </div>
                        <div className="country-details__country-property">Currencies: </div>
                        <div className="country-details__country-property">Languages: </div>
                    </div> -->
                </div>
                <div>
                    <div className="country-details__country-property">Tags:  <span className="border-countries" v-for="tag in imageInfo.tags">{{tag}}</span></div>
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
                published: this.$route.query.published,
                author: this.$route.query.author,
                date_taken: this.$route.query.date_taken,
                tags: this.$route.query.tags.split(' ')
            }
        }
    }
}
</script>
<style lang="">
    
</style>