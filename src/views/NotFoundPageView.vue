<template lang="">
    <div>
        <Header></Header>
        404 not found
        <router-link to="/">Home</router-link>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
    name: 'NotFoundPageView',
    components: {Header}
}
</script>
