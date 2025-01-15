<template lang="">
    <div class="black-bg" v-if="modalOne">
        <div class="white-bg">
            <img :src="oneRoom[modalIndex].image" class="room-img">
            <h4>{{ oneRoom[modalIndex].title }}</h4>
            <p>{{ oneRoom[modalIndex].content }}</p>
            <!-- <input @input="month = $event.target.value"> == v-model -->
            <!-- input에 사용 후 데이터값 저장하는데 사용.  -->
            <!-- input에 입력한 것은 전부 문자형 .number를 입력하면 숫자형으로 바뀌지만
              문자를 입력하는건 막을 수 없음 -->
            <input v-model="month">
            <select v-model="month">
                <option v-for="selOpt in 12" :key="selOpt">{{selOpt}}</option>
            </select>
            <p>{{month}} 개월 선택함 : 가격 : {{ month * oneRoom[modalIndex].price }} 원</p>
            <h2 @click="$emit('modalOff',false)">닫기</h2>
        </div>
    </div>
</template>
<script>
export default {
    name : "ModalExport",
    data(){
        return{
            month : 1,
        }
    },
    props :{
        oneRoom : Object,
        modalIndex : Number,
        modalOne : Boolean,
    }
}
</script>
<style lang="">
    
</style>