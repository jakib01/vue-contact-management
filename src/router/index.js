import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactManager from "@/views/ContactManager";
import AddComponent from "@/views/AddComponent";
import EditComponent from "@/views/EditComponent";
import ViewComponent from "@/views/ViewComponent";
import PageNotFound from "@/views/PageNotFound";



const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/contacts',
    component: HomeView
  },
  {
    path: '/Contacts',
    name: 'ContactManager',
    component: ContactManager
  },
  {
    path: '/Contacts/add',
    name: 'AddComponent',
    component: AddComponent
  },
  {
    path: '/Contacts/edit/:contactId',
    name: 'EditComponent',
    component: EditComponent
  },
  {
    path: '/Contacts/view/:contactId',
    name: 'ViewComponent',
    component: ViewComponent
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
