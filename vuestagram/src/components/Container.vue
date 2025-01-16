<template lang="">
    <div>
        <PostView></PostView>
        <PostView></PostView>
        <PostView></PostView>
    </div>
</template>
<script>

import postView from './Post.vue';

export default {
    name : "containerExport",
    components: {
        PostView: postView,
    }
}
</script>
<style>
    
</style>