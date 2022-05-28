<template lang="">
    <Fragment>
        <Header></Header>
        <main class="main">
            <div class="not-found-content">
                <div class="not-found-content__center">
                    <h1>Hmm!</h1>
                    <p>It seems that you're lost</p>
                    <p>Let us help guide you out and get you back home.</p>
                    <router-link class="btn" to="/">Home</router-link>
                </div>
            </div>    
        </main>
        <Footer></Footer>
    </Fragment>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'NotFoundPageView',
    components: { Header, Footer }
}
</script>
