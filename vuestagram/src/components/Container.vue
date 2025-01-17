<template>
    <div>
        <PostView 
        v-for="(a,i) in vuestaData" 
        :key="i" :vuestaData="vuestaData" 
        :postIndex="i"/>
    </div>
</template>
<script>

import postView from './Post.vue';

export default {
    name : "containerExport",
    components: {
        PostView: postView,
    },
    props:{
        vuestaData : Object,
    }
}
</script>
<style>
    
</style>