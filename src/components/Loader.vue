<template lang="">
    <div class="loader">
        <div v-for="index in 10" :key="index" class="loader__wave"></div>
    </div>
</template>
<script>
export default {
    name: 'Loader'
}
</script>