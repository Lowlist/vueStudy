import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App);
// (글로벌 변수 보관함) .emitter 를 추가하는 문법
// 자주 쓰는 라이브러리나 그런거 있으면 등록해두면 좋음.
// app.config.globalProperties.axios = axios;
// 이런식으로 사용하면 import 할필요없이 this.axios로 사용가능.
app.config.globalProperties.emitter = emitter;

// createApp(App).mount('#app')
app.mount('#app')