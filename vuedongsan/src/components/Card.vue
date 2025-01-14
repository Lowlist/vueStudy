<template lang="">
    <div v-for="(a,i) in oneRoom" :key="i" class="room-product">
        <img :src="oneRoom[i].image" class="room-img">
        <p>{{oneRoom[i].price}}</p>
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