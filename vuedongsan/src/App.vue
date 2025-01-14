<template>

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

    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <h4>원룸샵</h4>
        <div v-for="(a,i) in products" :key="i">
            <h4 class="red">{{a}}</h4>
            <p>50만원</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    data(){
        return {    
            menus : ['home', 'Shop', 'About'],
            products : ['역삼동원룸', '천호동원룸', '마포구원룸']
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
    margin-top: 60px;
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
</style>
