<template lang="">
    <div v-for="(a,i) in blogList" :key="i">
        <h5>{{ a.title }}</h5>
        <p>{{ a.content }}</p>
        <p>{{ a.date }}</p>
    </div>
</template>
<script>
export default {
    name : 'ListExport',
    props : {
        blogList : Object,
    },
}
</script>
<style lang="">
    
</style>