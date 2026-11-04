import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const siteUrl = 'https://www.gaiaesena.adv.br'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Gaia & Sena Advogados | Advocacia em Maceió, AL',
      description: 'Gaia & Sena Advogados em Maceió, AL. Orientação jurídica em Família e Sucessões, Direito Penal, Trabalhista e Previdenciário.'
    }
  },
  {
    path: '/areas-de-atuacao',
    name: 'areas-de-atuacao',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "areas-de-atuacao" */ '../views/AreasView.vue'),
    meta: {
      title: 'Áreas de Atuação | Gaia & Sena Advogados em Maceió',
      description: 'Conheça a atuação em Família e Sucessões, Direito Penal, Trabalhista e Previdenciário da Gaia & Sena Advogados em Maceió, Alagoas.'
    }
  },
  {
    path: '/artigos',
    name: 'artigos',
    component: () => import(/* webpackChunkName: "artigos" */ '../views/ArtigosView.vue'),
    meta: {
      title: 'Artigos Jurídicos em Maceió | Gaia & Sena Advogados',
      description: 'Orientações jurídicas sobre divórcio, guarda compartilhada, verbas rescisórias e benefícios do INSS, preparadas pela Gaia & Sena Advogados em Maceió, AL.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

function updateMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

router.afterEach((to) => {
  const title = to.meta.title || 'Gaia & Sena Advogados | Maceió, AL'
  const description = to.meta.description || ''
  const canonical = `${siteUrl}${to.path === '/' ? '/' : to.path}`

  document.title = title
  updateMeta('name', 'description', description)
  updateMeta('property', 'og:title', title)
  updateMeta('property', 'og:description', description)
  updateMeta('property', 'og:url', canonical)
  updateMeta('name', 'twitter:title', title)
  updateMeta('name', 'twitter:description', description)

  let canonicalLink = document.head.querySelector('link[rel="canonical"]')
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.rel = 'canonical'
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.href = canonical
})

export default router
