<template lang="">
    <div class="black-bg" v-if="modalOne">
        <div class="white-bg">
            <img :src="oneRoom[modalIndex].image" class="room-img">
            <h4>{{ oneRoom[modalIndex].title }}</h4>
            <p>{{ oneRoom[modalIndex].content }}</p>
            <p>가격 : {{ oneRoom[modalIndex].price }} 원</p>
            <h2 @click="modalOne = !modalOne">닫기</h2>
        </div>
    </div>
</template>
<script>
export default {
    name : "ModalExport"
}
</script>
<style lang="">
    
</style>