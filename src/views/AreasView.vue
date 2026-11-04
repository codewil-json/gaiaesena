<template>
  <div class="practice-view">
    <section class="practice-hero">
      <div class="section-wrap reveal">
        <span class="eyebrow">Gaia &amp; Sena · Maceió, AL</span>
        <h1>Áreas de <em>atuação</em></h1>
        <p>
          Conheça os campos em que oferecemos orientação jurídica.
          Cada situação é analisada com atenção às suas particularidades.
        </p>
        <a class="button-primary" href="https://wa.me/5582999264158" target="_blank" rel="noopener noreferrer">
          Converse com uma advogada
          <svg class="button-arrow" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M5 15 15 5M6 5h9v9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/>
          </svg>
        </a>
      </div>
    </section>

    <section class="practice-details">
      <div class="section-wrap">
        <article id="familia" class="detail-row reveal">
          <div class="detail-index">01 <span>Família e Sucessões</span></div>
          <div class="detail-content">
            <h2>Família e Sucessões</h2>
            <p>
              Questões familiares e sucessórias envolvem escolhas importantes e,
              muitas vezes, momentos delicados. Oferecemos orientação em temas
              como divórcio, guarda, alimentos, união estável, inventário e partilha,
              com atenção ao contexto e às necessidades de cada família.
            </p>
          </div>
          <a class="detail-contact" href="https://wa.me/5582999264158" target="_blank" rel="noopener noreferrer" aria-label="Fale sobre Família e Sucessões">
            ↗
          </a>
        </article>
        <article id="penal" class="detail-row reveal">
          <div class="detail-index">02 <span>Penal</span></div>
          <div class="detail-content">
            <h2>Direito Penal</h2>
            <p>
              Atuação e acompanhamento jurídico em questões criminais, com
              respeito às garantias legais, análise cuidadosa dos fatos e comunicação
              clara sobre os procedimentos e os próximos passos.
            </p>
          </div>
          <a class="detail-contact" href="https://wa.me/5582999264158" target="_blank" rel="noopener noreferrer" aria-label="Fale sobre Direito Penal">
            ↗
          </a>
        </article>
        <article id="trabalhista" class="detail-row reveal">
          <div class="detail-index">03 <span>Trabalhista</span></div>
          <div class="detail-content">
            <h2>Direito Trabalhista</h2>
            <p>
              Orientação em questões relacionadas às relações de trabalho, direitos
              e deveres de trabalhadores e empregadores, incluindo análise de
              contratos, verbas trabalhistas e rescisões.
            </p>
          </div>
          <a class="detail-contact" href="https://wa.me/5582999264158" target="_blank" rel="noopener noreferrer" aria-label="Fale sobre Direito Trabalhista">
            ↗
          </a>
        </article>
        <article id="previdenciario" class="detail-row reveal">
          <div class="detail-index">04 <span>Previdenciário</span></div>
          <div class="detail-content">
            <h2>Direito Previdenciário</h2>
            <p>
              Apoio na compreensão de benefícios e direitos previdenciários,
              com análise de documentos e orientação sobre requerimentos,
              revisões e demais etapas administrativas ou judiciais.
            </p>
          </div>
          <a class="detail-contact" href="https://wa.me/5582999264158" target="_blank" rel="noopener noreferrer" aria-label="Fale sobre Direito Previdenciário">
            ↗
          </a>
        </article>
      </div>
    </section>

    <section class="practice-cta">
      <div class="section-wrap practice-cta-inner reveal">
        <div>
          <span class="eyebrow">Atendimento em Maceió, Alagoas</span>
          <h2>Precisa de orientação para o seu caso?</h2>
          <p>Entre em contato para conversar sobre a sua situação.</p>
        </div>
        <a class="button-light" href="https://wa.me/5582999264158" target="_blank" rel="noopener noreferrer">
          Fale com a equipe
          <svg class="button-arrow" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M5 15 15 5M6 5h9v9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/>
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AreasView',
  mounted() {
    document.title = 'Áreas de Atuação | Gaia & Sena Advogados Associados'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Conheça as áreas de atuação da Gaia & Sena Advogados Associados em Maceió: Família e Sucessões, Penal, Trabalhista e Previdenciário.'
    )
  }
}
</script>

<style scoped>
.practice-hero {
  padding: 88px 0 84px;
  color: var(--white);
  background:
    radial-gradient(ellipse at 82% 25%, rgba(201, 166, 106, .2), transparent 32%),
    var(--forest-deep);
}

.practice-hero h1 {
  margin: 20px 0 14px;
  font-family: var(--serif);
  font-size: clamp(48px, 6vw, 72px);
  font-weight: 500;
  letter-spacing: -.035em;
}

.practice-hero h1 em {
  color: var(--gold-light);
  font-weight: 500;
}

.practice-hero p {
  max-width: 560px;
  margin: 0 0 26px;
  color: rgba(255, 255, 255, .76);
  font-size: 15px;
  line-height: 1.8;
}

.practice-hero .button-primary {
  color: var(--forest-deep);
  background: var(--gold-light);
  border-color: var(--gold-light);
}

.practice-hero .button-primary:hover {
  background: var(--white);
  border-color: var(--white);
}

.practice-details {
  padding: 20px 0 38px;
  background: var(--white);
}

.detail-row {
  display: grid;
  grid-template-columns: 220px 1fr 48px;
  align-items: start;
  gap: 30px;
  padding: 43px 0;
  border-bottom: 1px solid var(--line);
  scroll-margin-top: 105px;
}

.detail-index {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 11px;
  color: #a78b5e;
  font-size: 10px;
  letter-spacing: .12em;
}

.detail-index span {
  color: var(--ink-soft);
  font-size: 10px;
  letter-spacing: .05em;
}

.detail-content h2 {
  margin: 0 0 13px;
  font-family: var(--serif);
  font-size: 29px;
  font-weight: 500;
}

.detail-content p {
  max-width: 690px;
  margin: 0;
  color: var(--ink-soft);
  font-size: 13px;
  line-height: 1.9;
}

.detail-contact {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  color: var(--forest);
  border: 1px solid var(--line);
  border-radius: 50%;
  font-size: 16px;
  text-decoration: none;
  transition: color .2s ease, background .2s ease, border-color .2s ease;
}

.detail-contact:hover {
  color: var(--white);
  background: var(--forest);
  border-color: var(--forest);
}

.practice-cta {
  padding: 62px 0;
  color: var(--white);
  background:
    radial-gradient(ellipse at 78% 50%, rgba(201, 166, 106, .15), transparent 35%),
    var(--forest);
}

.practice-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.practice-cta .eyebrow {
  color: var(--gold-light);
}

.practice-cta h2 {
  margin: 14px 0 8px;
  font-family: var(--serif);
  font-size: clamp(30px, 4vw, 43px);
  font-weight: 500;
}

.practice-cta p {
  margin: 0;
  color: rgba(255, 255, 255, .75);
  font-size: 13px;
}

.button-light {
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-shrink: 0;
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

@media (max-width: 900px) {
  .detail-row {
    grid-template-columns: 170px 1fr 43px;
    gap: 20px;
  }
}

@media (max-width: 680px) {
  .practice-hero {
    padding: 68px 0 62px;
  }

  .practice-hero p {
    font-size: 13px;
  }

  .practice-details {
    padding: 7px 0 20px;
  }

  .detail-row {
    grid-template-columns: 1fr 43px;
    gap: 12px;
    padding: 28px 0;
    scroll-margin-top: 78px;
  }

  .detail-index {
    grid-column: 1 / -1;
    padding-top: 0;
  }

  .detail-content h2 {
    font-size: 25px;
  }

  .detail-content p {
    font-size: 12px;
  }

  .practice-cta {
    padding: 50px 0;
  }

  .practice-cta-inner {
    align-items: flex-start;
    flex-direction: column;
  }

  .practice-cta h2 {
    font-size: 35px;
  }
}
</style>
