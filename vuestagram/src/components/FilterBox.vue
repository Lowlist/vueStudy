<template>
    <div @click="filterChange()" :class="`${filtersData} filter-item`" :style="{backgroundImage : `url(${uploadImg})`}">
        <!-- slot마다 name="a" 이런식으로 지정하면 여러개 가능 -->
        <!-- <slot :msg="msg"></slot> -->
        <slot name="xx"></slot>
    </div>
</template>
<script>
export default {
    name: 'filterboxExport',
    data(){
        return{
            msg : 'hello',
        }
    },
    props: {
        uploadImg : String,
        filtersData : String,
    },
    methods:{
        // this.emitter.emit('fires','데이터'); 주는곳 
        // this.emitter.on('fires', (a)=>{console.log(a)}); 받는곳
        // Vuex가 더 좋대요
        filterChange(){
            this.emitter.emit('filterChange',this.filtersData);
        }
    }
}
</script>
<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
    background-position : center;
    text-shadow: 2px 2px black;
    cursor: pointer;
}
</style>