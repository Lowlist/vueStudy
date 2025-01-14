<template lang="">
    <div class="room-product">
        <img :src="oneRoom.image" class="room-img">
        <p>{{oneRoom.price}}</p>
    </div>
</template>
<script>
export default {
    name: 'cardExport',
    props:{
        oneRoom : Object,
    }
}
</script>
<style lang="">
    
</style>