<template lang="">
    <div class="filter-with-fav">
        <router-link to="/" class="btn">All </router-link>
        <router-link :to="{name: 'FavoriteImageView'}" class="btn"><i class="fa fa-heart" aria-hidden="true"></i></router-link>
    </div>
</template>
<script>
export default {
    name: 'FilterWithFav'
}
</script>
