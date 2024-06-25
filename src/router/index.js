import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Team from "../views/Team.vue";
import Showcase from "../views/Showcase.vue";
import Contact from "../views/Contact.vue";
import Classes from "../views/Classes.vue";
import Private from "../views/Private.vue";
import Thankyou from "../views/Thankyou.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/classes",
    name: "Classes",
    component: Classes,
  },
  {
    path: "/private",
    name: "Private",
    component: Private,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/showcase",
    name: "Showcase",
    component: Showcase,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/thanks",
    name: "Thankyou",
    component: Thankyou,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(function (to, from, next) { 
  setTimeout(() => {
      window.scrollTo(0, 0);
  }, 100);
  next();
});

export default router;
