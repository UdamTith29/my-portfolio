import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Bubbles from '@/views/Bubbles.vue'
import NewHome from '@/views/NewHome.vue'
import Skills from '@/components/Skills.vue'
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'

const routes = [
  { path: '/', component: NewHome },
  { path: '/bubble', component: Bubbles },
  { path: '/project', component: Projects },
  { path: '/about-me', component: About },
  { path: '/contact', component: Contact },
  { path: '/skill', component: Skills },
  { path: '/education', component: Education },
  { path: '/experience', component: Experience },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
