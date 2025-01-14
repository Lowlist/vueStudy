<template>
    <div class="black-bg" v-if="modalOne == true">
        <div class="white-bg">
            <h4>상세페이지임</h4>
            <p>상세페이지 내용임</p>
            <h2 @click="modalOne = !modalOne">닫기</h2>
        </div>
    </div>

    <div class="menu">
        <!-- 
            v-for 반복문 = {변수명} in {반복횟수} :key="키값"
            1.자료안의 데이터 갯수만큼 반복됨
            2.작명한 변수는 데이터안의 자료가 됨
            :key=""의 용도 = 반복문 돌린 요소를 컴퓨터가 구분하기 위해 사용
            .map 과 동일하게 (a,i) 이런식으로 작명하면 똑같은 기능이 됨.
        -->
        <a v-for="(a,i) in menus" :key="i">{{a}}</a>
    </div>

    <!-- <div v-for="(a,i) in products" :key="i">
        <h4 class="red">{{products[i]}}</h4>
        <p>50만원</p>
    </div> -->
    <!-- 
        @click or v-on:click = "JavaScript"  
    -->
    <!-- <button @click="신고수 += 1">허위매물 신고</button> <span>신고수 : {{신고수}}</span> -->

    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <h4>원룸샵</h4>
        <div v-for="(a,i) in oneRoom" :key="i">
            <img :src="oneRoom[i].image" class="room-img">
            <h4 @click="modalOne = true">{{oneRoom[i].title}}</h4>
            <p>{{oneRoom[i].price}}</p>
        </div>
        <!-- <div>
            <img src="./assets/room0.jpg" class="room-img">
            <h4 @click="modalOne = true">{{products[0]}}</h4>
            <p>50만원</p>
            <button @click="신고수[0]++">허위매물 신고</button>
            <span>신고수 : {{신고수[0]}}</span>
        </div>
        <div>
            <img src="./assets/room1.jpg" class="room-img">
            <h4>{{products[1]}}</h4>
            <p>60만원</p>
            <button @click="신고수[1]++">허위매물 신고</button>
            <span>신고수 : {{신고수[1]}}</span>
        </div>
        <div>
            <img src="./assets/room2.jpg" class="room-img">
            <h4>{{products[2]}}</h4>
            <p>70만원</p>
            <button @click="신고수[2]++">허위매물 신고</button>
            <span>신고수 : {{신고수[2]}}</span>
        </div> -->
    </div>
</template>

<script>

import oneRoom from './assets/oneroom.js';

export default {
    name: 'App',
    data(){
        return {
            modalOne : false,
            menus : ['home', 'Shop', 'About'],
            products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
            신고수 : [0,0,0],
            oneRoom : oneRoom
        }
    },
    methods : {
        clickPlus(){
            this.신고수 += 1;
        }
    },
    components: {
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.menu{
    background-color: darkslateblue;
    padding: 15px;
    border-radius: 5px;
}
.menu a{
    color: white;
    padding: 10px;
}
.room-img{
    width : 100%;
    margin-top : 40px;
}
body{
    margin: 0;
}
div{
    box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.white-bg h2{
    border: 1px solid black;
    padding: 15px;
}
</style>
