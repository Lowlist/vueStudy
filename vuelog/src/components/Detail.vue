<template lang="">
    <div>
        <h4>{{ blogList[$route.params.id].title }}</h4>
        <h5>{{ blogList[$route.params.id].content }}</h5>
        <p>{{ blogList[$route.params.id].date }}</p>
    </div>
    <router-view/>
</template>
<script>
export default {
    name : 'detailExport',
    props : {
        blogList : Object,
    },
}
</script>
<style lang="">
    
</style>