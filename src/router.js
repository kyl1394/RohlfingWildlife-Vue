import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import PortfolioPage from './views/PortfolioPage.vue'
import PrintShopPage from './views/PrintShopPage.vue'
import WorkshopsPage from './views/WorkshopsPage.vue'
import AboutPage from './views/AboutPage.vue'
import ContactPage from './views/ContactPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/portfolio', component: PortfolioPage },
  { path: '/print-shop', component: PrintShopPage },
  { path: '/workshops', component: WorkshopsPage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router