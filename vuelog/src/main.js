import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// main.js에서 라우터 설정하는거임
// createApp(App).mount('#app') 기본인데 .use(라우터) 이런식으로 넣어야됨

createApp(App).use(router).mount('#app')
