import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Bubbles from '@/views/Bubbles.vue'
import NewHome from '@/views/NewHome.vue'

const routes = [
  { path: '/', component: NewHome },
  { path: '/bubbles', component: Bubbles },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
