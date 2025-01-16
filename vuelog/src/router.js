import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import home from "./components/Home.vue";
import detail from "./components/Detail.vue";
import error from "./components/Error.vue";

// 위에서 아래순으로 순서 중요함.
const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/home",
    component: home,
  },
  {
    // 소괄호 안에 정규식 입력가능
    // * 입력하면 반복
    path: "/detail/:id(\\d+)",
    component: detail,
  },
  {
    // 404 홈페이지
    path: "/:anything(.*)",
    component: error,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 