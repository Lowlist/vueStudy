<template>
    <div class="post">
        <div class="post-header">
            <!-- <img :src="vuestaData[postIndex].userImage" class="profile"> -->
            <div :style="{backgroundImage : `url(${vuestaData.userImage})`}" class="profile"></div>
            <span class="profile-name">{{vuestaData.name}}</span>
        </div>
        <!-- <img :src="vuestaData.postImage" class="post-body"> -->
        <div :class="vuestaData.filter" :style="{backgroundImage : `url(${vuestaData.postImage})`}" class="post-body"></div>
        <div class="post-content">
            <p>{{vuestaData.likes}} Likes</p>
            <p>
                <strong>{{vuestaData.name}}</strong>
                {{vuestaData.content}}
            </p>
            <p class="date">{{vuestaData.date}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'postExport',
    props:{
        vuestaData : Object,
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