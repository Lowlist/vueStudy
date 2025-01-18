<template>
    <div :class="`${filtersData} filter-item`" :style="{backgroundImage : `url(${uploadImg})`}">
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
}
</style>