<template>
    <div class="post">
        <div class="post-header">
            <img :src="vuestaData[postIndex].userImage" class="profile">
            <span class="profile-name">{{vuestaData[postIndex].name}}</span>
        </div>
        <img :src="vuestaData[postIndex].postImage" class="post-body">
        <div class="post-content">
            <p>{{vuestaData[postIndex].likes}} Likes</p>
            <p>
                <strong>{{vuestaData[postIndex].name}}</strong>
                {{vuestaData[postIndex].content}}
            </p>
            <p class="date">{{vuestaData[postIndex].date}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'postExport',
    props:{
        vuestaData : Object,
        postIndex : Number,
    }
}
</script>
<!-- lang="" << 이거 중복되면 에러남  -->
<style>
.post {
    width: 100%;
}

.profile {
    width: 30px;
    height: 30px;
    background-size: 100%;
    border-radius: 50%;
    float: left;
}

.profile-name {
    display: block;
    float: left;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 14px;
}

.post-header {
    height: 30px;
    padding: 10px;
}

.post-body {
    height: 450px;
    background-position: center;
    background-size: cover;
}

.post-content {
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
}

.date {
    font-size: 11px;
    color: grey;
    margin-top: -8px;
}
</style>