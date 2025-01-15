<template lang="">
    <div class="room-product">
        <img :src="oneRoom.image" class="room-img">
        <h4 @click="$emit('modalOpen')">{{oneRoom.title}}</h4>
        <p>{{oneRoom.price}}</p>
    </div>
</template>
<script>
export default {
    name: 'cardExport',
    props: {
        oneRoom: Object,
    }
}
</script>
<style lang="">

</style>