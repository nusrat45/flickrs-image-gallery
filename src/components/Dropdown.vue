<template lang="">
    <label class="dropdown" :class="customClass">
        <select @change="eventMethod($event)">
            <slot></slot>
        </select>
    </label>
</template>
<script>
export default {
    name: 'Dropdown',
    props:['eventMethod', 'customClass']
}
</script>
<style lang="">
    
</style>