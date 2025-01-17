<template>
    <div :class="`${filtersData} filter-item`" :style="{backgroundImage : `url(${uploadImg})`}"></div>
</template>
<script>
export default {
    name: 'filterboxExport',
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
}
</style>