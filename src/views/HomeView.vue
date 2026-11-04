<template>
  <div class="home-view">
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy reveal">
          <span class="eyebrow">Advocacia · Maceió, AL</span>
          <h1>Segurança jurídica.<br><em>Relações humanas.</em></h1>
          <p>
            Uma advocacia próxima e comprometida, que escuta a sua história
            para construir caminhos jurídicos com clareza e responsabilidade.
          </p>
          <div class="hero-actions">
            <a class="button-primary" href="https://wa.me/5582999264158" target="_blank" rel="noopener noreferrer">
              Converse com uma advogada
              <svg class="button-arrow" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                <path d="M5 15 15 5M6 5h9v9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/>
              </svg>
            </a>
            <a class="text-link" href="#atuacao">Conheça nossa atuação <span aria-hidden="true">↓</span></a>
          </div>
          <div class="hero-note">
            <span class="note-mark" aria-hidden="true">G&amp;S</span>
            <span>Atendimento com atenção<br>em cada detalhe.</span>
          </div>
        </div>

        <div class="hero-visual reveal" aria-label="Retratos das advogadas">
          <div class="hero-photo hero-photo-main">
            <img src="/img/beatriz-gaia.webp" alt="Dra. Beatriz Gaia, advogada">
          </div>
          <div class="hero-photo hero-photo-secondary">
            <img src="/img/niedja-sena.webp" alt="Dra. Niedja Sena, advogada">
          </div>
          <div class="hero-visual-caption">
            <span>Gaia <b>&amp;</b> Sena</span>
            <small>Advogadas associadas</small>
          </div>
          <span class="hero-ornament" aria-hidden="true">§</span>
        </div>
      </div>
      <div class="hero-bottom reveal">
        <span>Atuação pautada por ética e transparência</span>
        <a href="#escritorio">Saiba mais sobre nós <span aria-hidden="true">↓</span></a>
      </div>
    </section>

    <section id="escritorio" class="office-section">
      <div class="section-wrap office-grid">
        <div class="office-intro reveal">
          <span class="eyebrow">Gaia &amp; Sena Advogados Associados</span>
          <h2>Direito se faz com conhecimento. E também com <em>presença.</em></h2>
        </div>
        <div class="office-copy reveal">
          <p>
            Acreditamos que uma boa orientação começa pela escuta. Nosso trabalho
            une cuidado no atendimento, análise responsável e comunicação clara
            para que você compreenda cada etapa da sua demanda.
          </p>
          <p>
            Em Maceió, atendemos pessoas e famílias em diferentes momentos,
            com dedicação e respeito às particularidades de cada caso.
          </p>
          <a class="text-link" href="#equipe">Conheça as advogadas <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>

    <section id="atuacao" class="practice-section">
      <div class="section-wrap">
        <div class="section-heading practice-heading reveal">
          <span class="eyebrow">Como podemos ajudar</span>
          <h2>Áreas de atuação</h2>
          <p>
            Orientação jurídica em áreas essenciais da vida pessoal e profissional,
            com atendimento atento ao contexto de cada pessoa.
          </p>
        </div>
        <div class="practice-grid">
          <article class="practice-card reveal">
            <span class="practice-number">01</span>
            <span class="practice-symbol" aria-hidden="true">⌂</span>
            <h3>Família e Sucessões</h3>
            <p>Orientação em relações familiares, organização patrimonial e questões sucessórias.</p>
            <router-link to="/areas-de-atuacao#familia">Saiba mais <span aria-hidden="true">↗</span></router-link>
          </article>
          <article class="practice-card reveal">
            <span class="practice-number">02</span>
            <span class="practice-symbol" aria-hidden="true">§</span>
            <h3>Penal</h3>
            <p>Atuação jurídica responsável e acompanhamento cuidadoso em questões criminais.</p>
            <router-link to="/areas-de-atuacao#penal">Saiba mais <span aria-hidden="true">↗</span></router-link>
          </article>
          <article class="practice-card reveal">
            <span class="practice-number">03</span>
            <span class="practice-symbol" aria-hidden="true">↔</span>
            <h3>Trabalhista</h3>
            <p>Suporte em relações de trabalho, direitos e deveres de trabalhadores e empregadores.</p>
            <router-link to="/areas-de-atuacao#trabalhista">Saiba mais <span aria-hidden="true">↗</span></router-link>
          </article>
          <article class="practice-card reveal">
            <span class="practice-number">04</span>
            <span class="practice-symbol" aria-hidden="true">◷</span>
            <h3>Previdenciário</h3>
            <p>Orientação sobre benefícios previdenciários e questões relacionadas à proteção social.</p>
            <router-link to="/areas-de-atuacao#previdenciario">Saiba mais <span aria-hidden="true">↗</span></router-link>
          </article>
        </div>
        <router-link class="all-practices-link reveal" to="/areas-de-atuacao">
          Veja detalhes das áreas de atuação <span aria-hidden="true">→</span>
        </router-link>
      </div>
    </section>

    <section id="equipe" class="team-section">
      <div class="section-wrap team-grid">
        <div class="team-copy reveal">
          <span class="eyebrow">Quem estará ao seu lado</span>
          <h2>Conhecimento jurídico, cuidado de verdade.</h2>
          <p>
            Beatriz Gaia e Niedja Sena exercem a advocacia com compromisso
            profissional e atenção genuína às pessoas que confiam em seu trabalho.
          </p>
          <a class="text-link" href="#contato">Fale com a equipe <span aria-hidden="true">→</span></a>
        </div>
        <div class="team-cards">
          <article class="team-card reveal">
            <img src="/img/beatriz-gaia.webp" alt="Retrato de Beatriz Gaia" loading="lazy">
            <div class="team-card-caption">
              <span>Advogada</span>
              <h3>Beatriz Gaia</h3>
              <a href="mailto:beatrizgdecarvalho@gmail.com">Entrar em contato <span aria-hidden="true">↗</span></a>
            </div>
          </article>
          <article class="team-card team-card-offset reveal">
            <img src="/img/niedja-sena.webp" alt="Retrato de Niedja Sena" loading="lazy">
            <div class="team-card-caption">
              <span>Advogada</span>
              <h3>Niedja Sena</h3>
              <a href="mailto:niedjasena.adv@gmail.com">Entrar em contato <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="contact-banner">
      <div class="section-wrap contact-banner-inner">
        <div class="reveal">
          <span class="eyebrow">Conte com orientação jurídica</span>
          <h2>O primeiro passo é uma conversa.</h2>
        </div>
        <a class="button-light reveal" href="https://wa.me/5582999264158" target="_blank" rel="noopener noreferrer">
          Fale com a nossa equipe
          <svg class="button-arrow" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M5 15 15 5M6 5h9v9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/>
          </svg>
        </a>
      </div>
    </section>

    <section id="contato" class="contact-section">
      <div class="section-wrap contact-grid">
        <div class="section-heading reveal">
          <span class="eyebrow">Estamos à disposição</span>
          <h2>Vamos conversar?</h2>
          <p>Entre em contato para saber mais sobre o atendimento e agendar uma conversa.</p>
          <a class="button-primary contact-primary" href="https://wa.me/5582999264158" target="_blank" rel="noopener noreferrer">
            Iniciar conversa pelo WhatsApp
            <svg class="button-arrow" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M5 15 15 5M6 5h9v9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/>
            </svg>
          </a>
        </div>
        <div class="contact-details reveal">
          <div class="contact-detail">
            <span class="detail-label">Localidade</span>
            <span>Maceió · Alagoas</span>
          </div>
          <div class="contact-detail">
            <span class="detail-label">Telefones</span>
            <a href="tel:+5582999264158">Beatriz Gaia · (82) 99926-4158</a>
            <a href="tel:+5582988492067">Niedja Sena · (82) 98849-2067</a>
          </div>
          <div class="contact-detail">
            <span class="detail-label">E-mail</span>
            <a href="mailto:beatrizgdecarvalho@gmail.com">beatrizgdecarvalho@gmail.com</a>
            <a href="mailto:niedjasena.adv@gmail.com">niedjasena.adv@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 640px;
  background:
    radial-gradient(ellipse at 70% 45%, rgba(201, 166, 106, .11), transparent 40%),
    var(--paper);
}

.hero-inner {
  width: min(1200px, calc(100% - 64px));
  min-height: 590px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
  padding: 45px 0 64px;
}

.hero-copy {
  position: relative;
  z-index: 1;
  padding: 12px 0 0 16px;
}

.hero-copy h1 {
  margin: 25px 0 20px;
  color: var(--forest-deep);
  font-family: var(--serif);
  font-size: clamp(45px, 5.2vw, 70px);
  font-weight: 500;
  letter-spacing: -.035em;
  line-height: 1.08;
}

.hero-copy h1 em,
.office-intro h2 em {
  color: #a98651;
  font-weight: 500;
}

.hero-copy > p {
  max-width: 470px;
  margin: 0;
  color: var(--ink-soft);
  font-size: 15px;
  line-height: 1.85;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 30px;
}

.hero-actions .text-link {
  font-size: 11px;
}

.hero-note {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 54px;
  color: #677476;
  font-size: 11px;
  line-height: 1.55;
  letter-spacing: .03em;
}

.note-mark {
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  color: var(--gold);
  border: 1px solid var(--gold);
  border-radius: 50%;
  font-family: var(--serif);
  font-size: 11px;
}

.hero-visual {
  position: relative;
  width: 100%;
  height: 490px;
}

.hero-photo {
  position: absolute;
  overflow: hidden;
  background: #d3c8b7;
  box-shadow: 0 22px 65px rgba(22, 38, 36, .12);
}

.hero-photo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.hero-photo-main {
  top: 14px;
  right: 28px;
  width: 58%;
  height: 79%;
}

.hero-photo-main img {
  object-position: center 35%;
}

.hero-photo-secondary {
  bottom: 4px;
  left: 3px;
  width: 43%;
  height: 59%;
  border: 8px solid var(--paper);
}

.hero-photo-secondary img {
  object-position: center 34%;
}

.hero-visual::before {
  position: absolute;
  top: 0;
  right: 0;
  width: 76%;
  height: 90%;
  content: '';
  border: 1px solid var(--gold);
  transform: translate(11px, -10px);
}

.hero-visual-caption {
  position: absolute;
  right: 0;
  bottom: 4px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--forest);
  text-align: right;
}

.hero-visual-caption span {
  font-family: var(--serif);
  font-size: 21px;
}

.hero-visual-caption b {
  color: var(--gold);
  font-weight: 500;
}

.hero-visual-caption small {
  color: var(--ink-soft);
  font-size: 9px;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.hero-ornament {
  position: absolute;
  top: 5px;
  left: 1%;
  color: var(--gold);
  font-family: var(--serif);
  font-size: 56px;
  opacity: .7;
}

.hero-bottom {
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 max(32px, calc((100% - 1200px) / 2));
  color: rgba(255, 255, 255, .72);
  background: var(--forest);
  font-size: 10px;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.hero-bottom a {
  color: var(--gold-light);
  text-decoration: none;
}

.hero-bottom a span {
  padding-left: 9px;
}

.office-section {
  padding: 108px 0 110px;
  background: var(--white);
}

.office-grid {
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 11%;
  align-items: center;
}

.office-intro h2 {
  max-width: 540px;
  margin: 22px 0 0;
  font-family: var(--serif);
  font-size: clamp(36px, 4vw, 54px);
  font-weight: 500;
  letter-spacing: -.025em;
  line-height: 1.15;
}

.office-copy p {
  margin: 0 0 17px;
  color: var(--ink-soft);
  font-size: 14px;
  line-height: 1.9;
}

.office-copy .text-link {
  margin-top: 12px;
}

.practice-section {
  padding: 108px 0 102px;
  background: var(--paper);
}

.practice-heading {
  margin: 0 auto 43px;
  text-align: center;
}

.practice-heading .eyebrow {
  justify-content: center;
}

.practice-heading h2 {
  margin-bottom: 14px;
}

.practice-heading p {
  margin: 0 auto;
}

.practice-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.practice-card {
  position: relative;
  min-height: 260px;
  padding: 28px 25px 24px;
  border-right: 1px solid var(--line);
  transition: background .25s ease, transform .25s ease;
}

.practice-card:first-child {
  border-left: 1px solid var(--line);
}

.practice-card:hover {
  z-index: 1;
  background: var(--white);
  transform: translateY(-5px);
}

.practice-number {
  color: #9a8b71;
  font-size: 10px;
  letter-spacing: .12em;
}

.practice-symbol {
  position: absolute;
  top: 22px;
  right: 25px;
  color: var(--gold);
  font-family: var(--serif);
  font-size: 27px;
}

.practice-card h3 {
  margin: 42px 0 11px;
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 500;
}

.practice-card p {
  min-height: 64px;
  margin: 0;
  color: var(--ink-soft);
  font-size: 12px;
  line-height: 1.7;
}

.practice-card a {
  display: inline-flex;
  gap: 9px;
  margin-top: 19px;
  color: var(--forest);
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
}

.all-practices-link {
  display: flex;
  justify-content: center;
  gap: 13px;
  margin-top: 30px;
  color: var(--forest);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}

.team-section {
  padding: 112px 0 118px;
  background: var(--white);
}

.team-grid {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  align-items: center;
  gap: 7%;
}

.team-copy h2 {
  margin: 21px 0 16px;
  font-family: var(--serif);
  font-size: clamp(36px, 4vw, 50px);
  font-weight: 500;
  letter-spacing: -.025em;
  line-height: 1.13;
}

.team-copy p {
  margin: 0 0 23px;
  color: var(--ink-soft);
  font-size: 14px;
  line-height: 1.85;
}

.team-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 18px;
}

.team-card {
  overflow: hidden;
  background: var(--paper);
}

.team-card-offset {
  margin-top: 46px;
}

.team-card > img {
  width: 100%;
  aspect-ratio: .9;
  display: block;
  object-fit: cover;
  object-position: center 32%;
  filter: saturate(.88);
  transition: filter .35s ease, transform .5s ease;
}

.team-card:hover > img {
  filter: saturate(1);
  transform: scale(1.025);
}

.team-card-caption {
  padding: 18px 19px 20px;
}

.team-card-caption > span {
  color: #92856f;
  font-size: 9px;
  letter-spacing: .15em;
  text-transform: uppercase;
}

.team-card-caption h3 {
  margin: 5px 0 13px;
  font-family: var(--serif);
  font-size: 21px;
  font-weight: 500;
}

.team-card-caption a {
  color: var(--forest);
  font-size: 10px;
  text-decoration: none;
}

.team-card-caption a span {
  margin-left: 6px;
}

.contact-banner {
  padding: 63px 0;
  color: var(--white);
  background:
    radial-gradient(ellipse at 82% 50%, rgba(201, 166, 106, .16), transparent 37%),
    var(--forest);
}

.contact-banner-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.contact-banner .eyebrow {
  color: var(--gold-light);
}

.contact-banner h2 {
  margin: 15px 0 0;
  font-family: var(--serif);
  font-size: clamp(31px, 3.7vw, 46px);
  font-weight: 500;
}

.button-light {
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 23px;
  color: var(--forest-deep);
  background: var(--gold-light);
  border: 1px solid var(--gold-light);
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
  transition: background .2s ease, transform .2s ease;
}

.button-light:hover {
  background: var(--white);
  transform: translateY(-2px);
}

.contact-section {
  padding: 105px 0 112px;
  background: var(--paper);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12%;
}

.contact-grid .section-heading h2 {
  margin-bottom: 13px;
}

.contact-grid .section-heading p {
  margin: 0;
}

.contact-primary {
  margin-top: 27px;
}

.contact-details {
  border-top: 1px solid var(--line);
}

.contact-detail {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 34px 20px 0;
  border-bottom: 1px solid var(--line);
}

.detail-label {
  margin-bottom: 3px;
  color: #8d7a58;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.contact-detail a {
  width: fit-content;
  color: var(--ink-soft);
  font-size: 12px;
  line-height: 1.75;
  text-decoration: none;
  transition: color .2s ease;
}

.contact-detail a:hover {
  color: var(--forest);
}

.contact-detail .detail-arrow {
  position: absolute;
  top: 22px;
  right: 0;
  color: var(--gold);
}

@media (max-width: 900px) {
  .hero-inner {
    width: calc(100% - 48px);
    min-height: 530px;
  }

  .hero-visual {
    height: 420px;
  }

  .hero-copy {
    padding-left: 0;
  }

  .hero-actions {
    align-items: flex-start;
    flex-direction: column;
    gap: 17px;
  }

  .practice-card {
    padding-right: 17px;
    padding-left: 17px;
  }

  .practice-card h3 {
    font-size: 18px;
  }

  .team-grid {
    grid-template-columns: .75fr 1.25fr;
    gap: 5%;
  }
}

@media (max-width: 680px) {
  .hero {
    min-height: auto;
  }

  .hero-inner {
    width: calc(100% - 40px);
    min-height: 0;
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 61px 0 52px;
  }

  .hero-copy h1 {
    margin-top: 20px;
    font-size: clamp(43px, 12vw, 58px);
  }

  .hero-copy > p {
    font-size: 14px;
  }

  .hero-actions {
    align-items: flex-start;
    gap: 18px;
  }

  .hero-note {
    margin-top: 31px;
  }

  .hero-visual {
    width: calc(100% - 15px);
    height: min(108vw, 400px);
    margin: 0 0 0 7px;
  }

  .hero-photo-main {
    right: 18px;
    width: 59%;
    height: 80%;
  }

  .hero-photo-secondary {
    left: 0;
    width: 43%;
    height: 57%;
  }

  .hero-visual-caption {
    right: 0;
    bottom: 0;
  }

  .hero-bottom {
    min-height: 56px;
    gap: 15px;
    padding: 0 20px;
    font-size: 8px;
    letter-spacing: .07em;
  }

  .hero-bottom a {
    flex-shrink: 0;
  }

  .office-section,
  .practice-section,
  .team-section,
  .contact-section {
    padding: 76px 0;
  }

  .office-grid,
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .office-intro h2,
  .section-heading h2,
  .team-copy h2 {
    font-size: 39px;
  }

  .office-copy p,
  .team-copy p {
    font-size: 13px;
  }

  .practice-heading {
    margin-bottom: 29px;
  }

  .practice-grid {
    grid-template-columns: 1fr 1fr;
  }

  .practice-card {
    min-height: 240px;
    padding: 22px 16px 19px;
    border-bottom: 1px solid var(--line);
  }

  .practice-card:nth-child(odd) {
    border-left: 1px solid var(--line);
  }

  .practice-card:nth-child(even) {
    border-right: 1px solid var(--line);
  }

  .practice-card:nth-last-child(-n+2) {
    border-bottom: 0;
  }

  .practice-card h3 {
    margin-top: 37px;
    font-size: 17px;
  }

  .practice-card p {
    min-height: 81px;
    font-size: 11px;
  }

  .practice-symbol {
    top: 17px;
    right: 15px;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .team-cards {
    gap: 12px;
  }

  .team-card-offset {
    margin-top: 30px;
  }

  .team-card-caption {
    padding: 14px 12px 16px;
  }

  .team-card-caption h3 {
    font-size: 18px;
  }

  .contact-banner {
    padding: 52px 0;
  }

  .contact-banner-inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 23px;
  }

  .contact-banner h2 {
    font-size: 35px;
  }

  .contact-grid {
    gap: 38px;
  }
}
</style>
