<template lang="">
    <div v-for="(a,i) in blogList" :key="i">
        <h5 @click="$router.push('/detail/'+ i)">{{ a.title }}</h5>
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