<template>
   <div className="header">
        <div className="header__content">
            <div className="header__desc">ImGallary</div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Dropdown from './Dropdown.vue';
export default {
    name: "Header",
    components: { Dropdown }
}
</script>
<style lang="">
    
</style>