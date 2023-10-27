import Vue from "vue";
import VueRouter from "vue-router";
import FeedView from "../views/Feed.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "feed",
    component: FeedView
  },
  {
    path: "/fresh",
    name: "fresh",
    component: () => import("@/views/Fresh.vue")
  },
  {
    path: "/subscription",
    name: "subscriptions",
    component: () => import("@/views/Subscriptions.vue")
  },
  {
    path: "/topic/:topicID",
    name: "topic",
    component: () => import("@/views/CommunityTopic.vue")
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// const originalPush = router.replace;
// router.replace = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) {
//     return originalPush.call(this, location, onResolve, onReject);
//   }

//   return originalPush.call(this, location).catch((err) => {
//     if (VueRouter.isNavigationFailure(err)) {
//       return err;
//     }

//     return Promise.reject(err);
//   });
// };

export default router;