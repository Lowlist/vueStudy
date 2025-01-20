// 아무리봐도 리덕스가 떠오른다
// vuex 국룰 : 컴포넌트 안에서 직접 수정하기 금지
import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            name : 'kim',
        }
    },
})

export default store;