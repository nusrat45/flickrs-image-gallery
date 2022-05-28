<template lang="">
    <div class="fallback">
        <div class="fallback__center">
            <slot></slot>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'FallBack',
    props: ['customTitle', 'customText']
}
</script>
