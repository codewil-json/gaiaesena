<template>
  <div class="site-shell">
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header id="topo" class="site-header">
      <div class="header-inner">
        <router-link class="brand" to="/" aria-label="Gaia & Sena Advogados Associados — início">
          <img src="/img/logo-gaia-sena.webp" alt="Gaia & Sena Advogados Associados">
        </router-link>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="main-navigation"
          aria-label="Alternar menu"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
        </button>

        <nav id="main-navigation" class="main-navigation" :class="{ 'is-open': menuOpen }" aria-label="Navegação principal">
          <router-link to="/" @click="menuOpen = false">Início</router-link>
          <router-link :to="{ path: '/', hash: '#escritorio' }" @click="menuOpen = false">Sobre nós</router-link>
          <router-link to="/areas-de-atuacao" @click="menuOpen = false">Atuação</router-link>
          <router-link :to="{ path: '/', hash: '#contato' }" @click="menuOpen = false">Contato</router-link>
          <a class="header-cta" href="https://wa.me/5582999264158" target="_blank" rel="noopener noreferrer">
            Fale com a equipe
            <svg class="button-arrow" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M5 15 15 5M6 5h9v9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>

    <main id="conteudo">
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="footer-main">
        <router-link class="footer-brand" to="/" aria-label="Gaia & Sena — início">
          <img src="/img/logo-gaia-sena.webp" alt="Gaia & Sena Advogados Associados">
        </router-link>
        <p>Advocacia com escuta, clareza e compromisso em cada etapa.</p>
        <a class="footer-top" href="#topo" @click.prevent="windowScrollTop">Voltar ao topo ↑</a>
      </div>
      <div class="footer-bottom">
        <span>© {{ new Date().getFullYear() }} Gaia & Sena Advogados Associados</span>
        <span>Maceió · Alagoas</span>
        <span class="developer-credit">
          <span>Desenvolvido por</span>
          <a href="https://codewil.site" target="_blank" rel="noopener noreferrer" aria-label="Codewil — site oficial">
            <img src="/img/credit-cw.webp" alt="CW — desenvolvimento web" loading="lazy">
          </a>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuOpen: false,
      revealObserver: null
    }
  },
  mounted() {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || !('IntersectionObserver' in window)
    ) {
      return
    }

    this.revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          this.revealObserver.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -8% 0px'
    })

    document.body.classList.add('has-scroll-reveal')
    this.observeRevealElements()
  },
  watch: {
    $route() {
      this.$nextTick(() => this.observeRevealElements())
    }
  },
  beforeUnmount() {
    if (this.revealObserver) {
      this.revealObserver.disconnect()
    }
    document.body.classList.remove('has-scroll-reveal')
  },
  methods: {
    observeRevealElements() {
      if (!this.revealObserver) return

      document.querySelectorAll('#conteudo .reveal:not(.is-visible)').forEach((element) => {
        this.revealObserver.observe(element)
      })
    },
    windowScrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

:root {
  --ink: #17272b;
  --ink-soft: #435356;
  --forest: #183c3d;
  --forest-deep: #102b2d;
  --brand-bg: #23333e;
  --gold: #c9a66a;
  --gold-light: #ead9b5;
  --paper: #f7f5f0;
  --white: #fff;
  --line: rgba(23, 39, 43, .14);
  --serif: 'Playfair Display', Georgia, serif;
  --sans: 'DM Sans', Arial, sans-serif;
}

* {
  box-sizing: border-box;
  scrollbar-color: var(--forest) var(--paper);
  scrollbar-width: thin;
}

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: var(--paper);
}

*::-webkit-scrollbar-thumb {
  background: var(--forest);
  border: 2px solid var(--paper);
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb:hover {
  background: var(--gold);
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

body {
  margin: 0;
  color: var(--ink);
  background: var(--paper);
  font-family: var(--sans);
  -webkit-font-smoothing: antialiased;
}

body, button, a {
  font-family: var(--sans);
}

a {
  color: inherit;
}

button, a {
  -webkit-tap-highlight-color: transparent;
}

button:focus-visible, a:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 4px;
}

.site-shell {
  min-height: 100vh;
  overflow: hidden;
}

.skip-link {
  position: fixed;
  z-index: 20;
  top: 10px;
  left: 10px;
  padding: 10px 14px;
  color: var(--white);
  background: var(--forest-deep);
  transform: translateY(-160%);
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header {
  position: sticky;
  z-index: 10;
  top: 0;
  background: rgba(35, 51, 62, .97);
  border-bottom: 1px solid rgba(255, 255, 255, .12);
  backdrop-filter: blur(14px);
}

.header-inner {
  width: min(1200px, calc(100% - 64px));
  height: 88px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: inline-flex;
  align-items: center;
}

.brand img {
  display: block;
  width: 220px;
  height: auto;
}

.main-navigation {
  display: flex;
  align-items: center;
  gap: 34px;
}

.main-navigation > a:not(.header-cta) {
  color: rgba(255, 255, 255, .78);
  font-size: 13px;
  text-decoration: none;
  transition: color .2s ease;
}

.main-navigation > a:not(.header-cta):hover,
.main-navigation .router-link-active {
  color: var(--gold-light);
}

.header-cta,
.button-primary {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 22px;
  color: var(--white);
  background: var(--forest);
  border: 1px solid var(--forest);
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .03em;
  text-decoration: none;
  transition: background .2s ease, transform .2s ease, border-color .2s ease;
}

.header-cta {
  min-height: 42px;
  padding: 0 17px;
  color: var(--forest-deep);
  background: var(--gold-light);
  border-color: var(--gold-light);
  font-size: 11px;
}

.button-arrow {
  width: 15px;
  height: 15px;
  flex: 0 0 auto;
}

.header-cta:hover {
  color: var(--forest-deep);
  background: var(--white);
  border-color: var(--white);
  transform: translateY(-2px);
}

.button-primary:hover {
  color: var(--white);
  background: var(--forest-deep);
  border-color: var(--forest-deep);
  transform: translateY(-2px);
}

.menu-toggle {
  display: none;
}

.site-footer {
  padding: 48px max(32px, calc((100% - 1200px) / 2)) 22px;
  color: rgba(255, 255, 255, .76);
  background: var(--brand-bg);
}

.footer-main {
  min-height: 115px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, .16);
}

.footer-brand img {
  display: block;
  width: 220px;
  height: auto;
}

.footer-main p {
  margin: 0;
  font-family: var(--serif);
  font-size: 19px;
}

.footer-top {
  color: var(--gold-light);
  font-size: 12px;
  text-decoration: none;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 21px;
  font-size: 11px;
  letter-spacing: .04em;
}

.developer-credit {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, .54);
  font-size: 9px;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.developer-credit a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  line-height: 1;
}

.developer-credit a:hover {
  opacity: 1;
}

.developer-credit img {
  width: 52px;
  height: auto;
  display: block;
  opacity: .76;
  vertical-align: middle;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--gold);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
}

.eyebrow::before {
  width: 27px;
  height: 1px;
  content: '';
  background: currentColor;
}

.section-wrap {
  width: min(1200px, calc(100% - 64px));
  margin: 0 auto;
}

.section-heading {
  max-width: 700px;
}

.section-heading h2 {
  margin: 18px 0;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(36px, 4vw, 54px);
  font-weight: 500;
  line-height: 1.12;
}

.section-heading p {
  max-width: 570px;
  color: var(--ink-soft);
  font-size: 15px;
  line-height: 1.8;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--forest);
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}

.text-link span {
  transition: transform .2s ease;
}

.text-link:hover span {
  transform: translateX(5px);
}

.reveal {
  opacity: 1;
  translate: 0 0;
  transition:
    opacity .65s ease var(--reveal-delay, 0ms),
    translate .65s cubic-bezier(.2, .7, .2, 1) var(--reveal-delay, 0ms);
}

.practice-card.reveal {
  transition:
    background .25s ease,
    transform .25s ease,
    opacity .65s ease var(--reveal-delay, 0ms),
    translate .65s cubic-bezier(.2, .7, .2, 1) var(--reveal-delay, 0ms);
}

body.has-scroll-reveal .reveal:not(.is-visible) {
  opacity: 0;
  translate: 0 20px;
}

.practice-grid .reveal:nth-child(2),
.team-cards .reveal:nth-child(2),
.practice-details .detail-row:nth-child(2) {
  --reveal-delay: .08s;
}

.practice-grid .reveal:nth-child(3),
.practice-details .detail-row:nth-child(3) {
  --reveal-delay: .16s;
}

.practice-grid .reveal:nth-child(4),
.practice-details .detail-row:nth-child(4) {
  --reveal-delay: .24s;
}

@media (max-width: 900px) {
  .header-inner {
    width: calc(100% - 40px);
    height: 76px;
  }

  .brand img {
    width: 190px;
  }

  .main-navigation {
    gap: 18px;
  }

  .section-wrap {
    width: calc(100% - 48px);
  }
}

@media (max-width: 680px) {
  html {
    scroll-padding-top: 78px;
  }

  .site-header {
    backdrop-filter: none;
  }

  .header-inner {
    width: calc(100% - 36px);
    height: 72px;
  }

  .brand img {
    width: 165px;
  }

  .menu-toggle {
    position: relative;
    z-index: 2;
    width: 44px;
    height: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, .35);
    cursor: pointer;
  }

  .menu-toggle span {
    width: 18px;
    height: 1px;
    background: var(--gold-light);
    transition: transform .3s ease;
  }

  .menu-toggle[aria-expanded="true"] span:first-child {
    transform: translateY(3.5px) rotate(45deg);
  }

  .menu-toggle[aria-expanded="true"] span:last-child {
    transform: translateY(-3.5px) rotate(-45deg);
  }

  .main-navigation {
    position: fixed;
    z-index: 1;
    inset: 0 auto 0 0;
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 0;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    padding: 88px 32px 32px;
    background: var(--brand-bg);
    overflow-y: auto;
    overscroll-behavior: contain;
    transform: translateX(-100%);
    visibility: hidden;
    pointer-events: none;
    transition:
      transform .42s cubic-bezier(.22, .68, 0, 1),
      visibility 0s linear .42s;
    will-change: transform;
  }

  .main-navigation.is-open {
    flex-direction: column;
    transform: translateX(0);
    visibility: visible;
    pointer-events: auto;
    transition:
      transform .42s cubic-bezier(.22, .68, 0, 1),
      visibility 0s;
  }

  .main-navigation > a:not(.header-cta) {
    padding: 14px 0;
    border-bottom: 1px solid rgba(255, 255, 255, .12);
  }

  .main-navigation .header-cta {
    margin-top: 18px;
  }

  .section-wrap {
    width: calc(100% - 40px);
  }

  .footer-main {
    align-items: flex-start;
    flex-direction: column;
    gap: 19px;
    padding-bottom: 28px;
  }

  .footer-main p {
    max-width: 280px;
    font-size: 17px;
  }

  .footer-bottom {
    align-items: flex-start;
    gap: 10px;
    flex-direction: column;
    line-height: 1.6;
  }

  .developer-credit {
    margin-top: 3px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
</style>
