<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li v-if="tapIndex == 1" @click="nextTap()">Next</li>
            <li v-if="tapIndex == 2" @click="addPost()">발행</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>
    <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')" class="more-Btn">더보기</button>
    <Container :filterName="filterName" :vuestaData="vuestaData" :tapIndex="tapIndex" :uploadImg="uploadImg" @uploadContent="uploadContent = $event"/>
    <div class="footer">
        <ul class="footer-button-plus">
            <input @change="upload" type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>
</template>

<script>

// Vuex 사용하면 코드가 길어짐

import Container from './components/Container.vue';
import vuestaData from './assets/vuestaData';
import axios from 'axios';

export default {
    name: 'App',
    data(){
        return{
            vuestaData : vuestaData,
            index : 0,
            tapIndex : 0,
            uploadImg : "",
            uploadContent : "",
            filterName : "",
        }
    },
    components: {
        Container: Container,
    },
    methods : { 
        axiosRun(){
            axios.get(`https://codingapple1.github.io/vue/more${this.index}.json`)
            .then((response) => {
                // this. 안붙이면 재랜더링 안됨 ㅡㅡ
                this.vuestaData.push(response.data);
                this.index++;
            })
            .catch((err)=>
                console.log(err)
            )
        },
        upload(e){
            // 파일업로드 2가지 방법이 있음
            // FileReader() 파일을 글자로 변환해줌
            // URL.createObjectURL() 이미지의 가상 URL을 생성해줌
            let abc = e.target.files;
            if(abc[0].type.indexOf("image/") == 0){
                let url = URL.createObjectURL(abc[0]);
                this.uploadImg = url;
                this.tapIndex = 1;
            }
        },
        nextTap(){
            if(this.uploadImg != ""){
                this.tapIndex = 2;
            }
        },
        addPost(){
            if(this.tapIndex == 2){
                let posts= {
                    name: "Kim Hyun",
                    userImage: "https://picsum.photos/100?random=3",
                    postImage: this.uploadImg,
                    likes: 36,
                    date: "May 15",
                    liked: false,
                    content: this.uploadContent,
                    filter: this.filterName,
                }
                this.vuestaData.unshift(posts)
                this.tapIndex = 0;
            }
        }
    },
    mounted(){
        this.emitter.on('filterChange', (a)=>{
            this.filterName = a;
        });
    },
}
</script>

<style>
/* 이런식으로 임포트 하면됨 css는 */
/* @import 'style.css'; */
body {
    margin: 0;
}

ul {
    padding: 5px;
    list-style-type: none;
}

.logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
}

.header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
}

.header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
}

.header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
}

.footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
}

.footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
}

.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}

.inputfile {
    display: none;
}

.input-plus {
    cursor: pointer;
}

#app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}

</style>
