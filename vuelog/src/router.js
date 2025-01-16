import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import home from "./components/Home.vue";
import detail from "./components/Detail.vue";
import error from "./components/Error.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";

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
    // 리액트에서 쓰던 Nested 랑 동일한 친구임 URL로 지정해서 컴포넌트 보여주는
    // 이거 쓸바엔 Modal 사용할듯
    // component 란에 object 형식으로 component{List : List, Comment : Comment} 이런식으로 구성하면
    // 여러 컴포넌트를 하나의 URL에 보여줄수있음. (named views)
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      }
    ]
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