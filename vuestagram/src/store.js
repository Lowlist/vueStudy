// 아무리봐도 리덕스가 떠오른다
// vuex 국룰 : 컴포넌트 안에서 직접 수정하기 금지
// 리덕스 동일 store.js에 state 수정방법 정의
// 수정하고 싶으면 store.js에 요청
// 디버깅 편의성을 위해 여기에다가 수정하는것.
import { createStore } from "vuex";
import vuestaData from "./assets/vuestaData";
import axios from "axios";

const store = createStore({
    state(){
        return{
            name : 'kim',
            age : 20,
            vuestaDatas : [...vuestaData],
            disLike : false,
            more : {},
        }
    },
    mutations :{
        nameChange(state){
            state.name = 'Park';
        },
        ageUp(state,payload){
            state.age += payload;
        },
        likes(state,payload){
            if(state.disLike == false){
                state.vuestaDatas[payload].likes ++;
                state.disLike = true;
            } else {
                state.vuestaDatas[payload].likes --;
                state.disLike = false;
            }
        },
        setMore(state,payload){
            // this.vuestaDatas.push(response.data);
            state.more = payload
        }
    },
    // ajax 하는 곳
    actions : {
        getData(context){
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
            .then((response) => {
                console.log(response.data)
                context.commit('setMore',response.data);
            })
            .catch((err)=>
                console.log(err)
            )
        }
    },
})

export default store;