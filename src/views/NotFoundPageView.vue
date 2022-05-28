<template lang="">
    <Fragment>
        <Header></Header>
        <main class="main">
            <FallBack :customTitle="`Hmm!`" :customText="`It seems like you're lost.`"/>
            <FallBack>
                <h1>Hmm!</h1>
                <p>Look like you're lost.</p>
                <p>The page you're looking for is not available :(</p>
                <router-link class="btn" to="/">Go to Home</router-link>
            </FallBack>
        </main>
        <Footer></Footer>
    </Fragment>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import FallBack from '@/components/FallBack.vue';
export default {
    name: 'NotFoundPageView',
    components: { Header, Footer, FallBack }
}
</script>
