/* EXEMPLO — shell do cardápio: header, render das seções, interações e boot.
   Página única (rolagem + âncoras). Sem framework, sem build. */
import { RESTAURANT, SECTIONS, COMBOS, HIGHLIGHTS, INFO, TAGS } from "./data.js";
import { icon } from "./icons.js";
import { esc, formatBRL, observeReveals, toast } from "./ui.js";

/* ---------- Marca ---------- */
function logoMark(size = 38) {
  return `
  <svg class="brand__mark" width="${size}" height="${size}" viewBox="0 0 44 44" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="40" height="40" rx="12" fill="#b3401a"/>
    <path d="M11 21c0-5 5-8 11-8s11 3 11 8" stroke="#fff6ec" stroke-width="2.1" stroke-linecap="round"/>
    <path d="M11 21h22" stroke="#fff6ec" stroke-width="2.1" stroke-linecap="round"/>
    <path d="M12 25c2.3 0 2.3 1.7 4.6 1.7S18.9 25 21.2 25s2.4 1.7 4.7 1.7S28 25 30.3 25" stroke="#fff6ec" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13 29h18a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3z" fill="#fff6ec"/>
  </svg>`;
}

const NAV = SECTIONS.map((s) => ({ id: s.id, label: s.title })).concat({ id: "combos", label: "Combos" });

const waLink = (text) =>
  `https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(text)}`;
const mapsLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT.address.mapsQuery)}`;

/* ---------- Horário de funcionamento (status ao vivo) ---------- */
/* minutos desde a meia-noite; 1080 = 18h, 1410 = 23h30, 1500 = 01h do dia seguinte */
const SCHEDULE = { 0: [1080, 1380], 1: null, 2: [1080, 1410], 3: [1080, 1410], 4: [1080, 1410], 5: [1080, 1500], 6: [1080, 1500] };
function isOpenNow(d = new Date()) {
  const mins = d.getHours() * 60 + d.getMinutes();
  const today = SCHEDULE[d.getDay()];
  if (today && mins >= today[0] && mins < today[1]) return true;
  const prev = SCHEDULE[(d.getDay() + 6) % 7]; // janela da véspera que cruza a meia-noite
  if (prev && prev[1] > 1440 && mins < prev[1] - 1440) return true;
  return false;
}

/* ---------- Header ---------- */
function renderHeader() {
  const el = document.getElementById("site-header");
  el.innerHTML = `
    <div class="container nav">
      <a class="brand" href="#topo" aria-label="${esc(RESTAURANT.name)} — início">
        ${logoMark(38)}
        <span class="brand__name">${esc(RESTAURANT.name)}<small>${esc(RESTAURANT.kind)}</small></span>
      </a>
      <nav class="nav__links" aria-label="Seções do cardápio">
        ${NAV.map((n) => `<a class="nav__link" href="#${n.id}" data-spy="${n.id}">${esc(n.label)}</a>`).join("")}
      </nav>
      <a class="btn btn--sm nav__cta" href="${waLink(`Olá! Quero fazer um pedido na ${RESTAURANT.name}.`)}" target="_blank" rel="noopener">
        ${icon("whatsapp")} Pedir
      </a>
      <button class="nav__toggle" id="nav-toggle" aria-label="Abrir menu" aria-expanded="false">${icon("menu")}</button>
    </div>`;

  const onScroll = () => el.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  document.getElementById("nav-toggle").addEventListener("click", openMobileNav);
}

function openMobileNav() {
  const root = document.getElementById("modal-root");
  const toggle = document.getElementById("nav-toggle");
  const drawer = document.createElement("div");
  drawer.className = "mobile-nav is-open";
  drawer.innerHTML = `
    <div class="mobile-nav__scrim" data-close></div>
    <div class="mobile-nav__panel" role="dialog" aria-modal="true" aria-label="Menu">
      <div class="mobile-nav__head">
        <a class="brand" href="#topo" data-close>${logoMark(34)}<span class="brand__name">${esc(RESTAURANT.name)}</span></a>
        <button class="mobile-nav__close" aria-label="Fechar menu" data-close>${icon("close")}</button>
      </div>
      ${NAV.map((n) => `<a class="mobile-nav__link" href="#${n.id}" data-close>${esc(n.label)}</a>`).join("")}
      <a class="btn btn--block mobile-nav__cta" href="${waLink(`Olá! Quero fazer um pedido na ${RESTAURANT.name}.`)}" target="_blank" rel="noopener" data-close>
        ${icon("whatsapp")} Pedir no WhatsApp
      </a>
    </div>`;

  const close = () => {
    drawer.remove();
    document.removeEventListener("keydown", onKey);
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  };
  const onKey = (e) => {
    if (e.key === "Escape") close();
  };
  drawer.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) close();
  });
  document.addEventListener("keydown", onKey);
  root.appendChild(drawer);
  if (toggle) toggle.setAttribute("aria-expanded", "true");
  drawer.querySelector(".mobile-nav__close").focus();
}

/* ---------- Hero ---------- */
function renderHero() {
  const open = isOpenNow();
  return `
  <section class="hero" id="topo">
    <div class="container hero__inner">
      <span class="stamp">${icon("flame")} Hamburgueria · ${esc(RESTAURANT.neighborhood)}</span>
      <h1 class="hero__name">${esc(RESTAURANT.name)}</h1>
      <div class="hero__rule" aria-hidden="true"></div>
      <p class="hero__tagline">${esc(RESTAURANT.tagline)}</p>
      <div class="hero__meta">
        <span class="hero__open">${open ? icon("clock") + " Aberto agora" : icon("clock") + " Fechado agora"}</span>
        <span>${icon("pin")} ${esc(RESTAURANT.address.line1)}</span>
        <span>${icon("scooter")} Entrega em até 45 min</span>
      </div>
      <div class="hero__actions">
        <a class="btn btn--lg btn--breathe" href="#combos">${icon("flame")} Ver combos</a>
        <a class="btn btn--lg btn--ghost" href="${mapsLink()}" target="_blank" rel="noopener">${icon("pin")} Como chegar</a>
      </div>
    </div>
  </section>`;
}

/* ---------- Diferenciais ---------- */
function renderMarks() {
  return `
  <section class="section" style="padding-top:0">
    <div class="container reading reveal">
      <div class="marks">
        ${HIGHLIGHTS.map(
          (h) => `
          <div class="mark">
            <span class="mark__ic">${icon(h.icon)}</span>
            <div>
              <div class="mark__title">${esc(h.title)}</div>
              <p>${esc(h.text)}</p>
            </div>
          </div>`
        ).join("")}
      </div>
    </div>
  </section>`;
}

/* ---------- Item do cardápio ---------- */
function tagPill(key) {
  const t = TAGS[key];
  if (!t) return "";
  return `<span class="tag tag--${t.tone}">${t.icon ? icon(t.icon) : ""}${esc(t.label)}</span>`;
}
function itemMarkers(tags) {
  let out = "";
  if (tags.includes("picante")) out += `<span class="item__marker" title="Picante" aria-label="Picante">${icon("flame")}</span>`;
  if (tags.includes("vegetariano"))
    out += `<span class="item__marker item__marker--veg" title="Vegetariano" aria-label="Vegetariano">${icon("leaf")}</span>`;
  return out;
}
function renderItem(item) {
  const tags = item.tags || [];
  const pills = tags.filter((t) => t !== "picante" && t !== "vegetariano");
  return `
    <article class="item">
      <div class="item__top">
        <h3 class="item__name">${esc(item.name)}${itemMarkers(tags)}</h3>
        <span class="item__lead" aria-hidden="true"></span>
        <span class="item__price">${formatBRL(item.price)}</span>
      </div>
      <p class="item__desc">${esc(item.description)}</p>
      ${pills.length ? `<div class="item__tags">${pills.map(tagPill).join("")}</div>` : ""}
    </article>`;
}

/* ---------- Cardápio ---------- */
function renderMenu() {
  return `
  <section class="section">
    <div class="container reading">
      <div class="menu">
        ${SECTIONS.map(
          (s) => `
          <section class="menu-section reveal" id="${s.id}" aria-labelledby="head-${s.id}">
            <div class="menu-section__head">
              <h2 class="stamp" id="head-${s.id}">${icon(s.icon)} ${esc(s.title)}</h2>
              <span class="menu-section__subtitle">${esc(s.subtitle)}</span>
            </div>
            <div class="items">
              ${s.items.map(renderItem).join("")}
            </div>
          </section>`
        ).join("")}
      </div>
    </div>
  </section>`;
}

/* ---------- Selo de preço (SVG carimbo) ---------- */
function priceSeal(price) {
  return `
    <div class="combo__seal" aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="46" stroke="currentColor" stroke-width="2"/>
        <circle cx="50" cy="50" r="39" stroke="currentColor" stroke-width="1.3" stroke-dasharray="1.5 4"/>
      </svg>
      <span class="combo__seal-price"><b>${formatBRL(price).replace("R$ ", "")}</b><span>reais</span></span>
    </div>`;
}

/* ---------- Combos ---------- */
function renderCombos() {
  return `
  <section class="section section--alt" id="combos" aria-labelledby="head-combos">
    <div class="container reading">
      <div class="menu-section__head reveal">
        <h2 class="stamp" id="head-combos">${icon("burger")} Combos</h2>
        <span class="menu-section__subtitle">Lanche, acompanhamento e bebida com preço fechado.</span>
      </div>
      <div class="combos">
        ${COMBOS.map(
          (c) => `
          <article class="combo reveal">
            <div class="combo__body">
              <h3 class="combo__name">${esc(c.name)}</h3>
              <ul class="combo__includes">
                ${(c.includes || []).map((i) => `<li>${icon("chevronRight")} ${esc(i)}</li>`).join("")}
              </ul>
              <p class="combo__note">${esc(c.note)} <span class="combo__save">Economize R$ ${Number(c.save)}.</span></p>
            </div>
            ${priceSeal(c.price)}
          </article>`
        ).join("")}
      </div>
    </div>
  </section>`;
}

/* ---------- Info / contato ---------- */
function renderInfo() {
  const hoursRows = RESTAURANT.hours
    .map((h) => {
      const closed = /fechad/i.test(h.h);
      return `<div><dt>${esc(h.d)}</dt><dd class="${closed ? "is-closed" : ""}">${esc(h.h)}</dd></div>`;
    })
    .join("");
  return `
  <section class="section" id="contato" aria-labelledby="head-contato">
    <div class="container reading">
      <div class="menu-section__head reveal">
        <h2 class="stamp" id="head-contato">${icon("pin")} Visite ou peça</h2>
        <span class="menu-section__subtitle">Salão na Vila Madalena e entrega própria na região.</span>
      </div>
      <div class="info-grid reveal">
        <div class="info-block">
          <h3>Onde estamos</h3>
          <ul class="info-list">
            <li>${icon("pin")} <span>${esc(RESTAURANT.address.line1)}<br>${esc(RESTAURANT.address.line2)}</span></li>
            <li><a href="tel:+55${esc(RESTAURANT.phoneRaw)}">${icon("phone")} ${esc(RESTAURANT.phone)}</a></li>
            <li><a href="${waLink(`Olá! Quero fazer um pedido na ${RESTAURANT.name}.`)}" target="_blank" rel="noopener">${icon("whatsapp")} Pedir pelo WhatsApp</a></li>
          </ul>
          <p class="delivery-note">${esc(INFO.delivery)}</p>
          <div class="pay">${INFO.payment.map((p) => `<span>${esc(p)}</span>`).join("")}</div>
        </div>
        <div class="info-block">
          <h3>Horário</h3>
          <dl class="info-hours">${hoursRows}</dl>
        </div>
      </div>
    </div>
  </section>`;
}

/* ---------- Footer ---------- */
function renderFooter() {
  const el = document.getElementById("site-footer");
  const year = new Date().getFullYear();
  el.innerHTML = `
    <div class="container">
      <div class="footer-top">
        <a class="brand" href="#topo">${logoMark(40)}<span class="brand__name">${esc(RESTAURANT.name)}</span></a>
        <div class="footer-social">
          <a href="${esc(RESTAURANT.social.instagramUrl)}" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram")}</a>
          <a href="${waLink(`Olá! Quero fazer um pedido na ${RESTAURANT.name}.`)}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon("whatsapp")}</a>
          <a href="tel:+55${esc(RESTAURANT.phoneRaw)}" aria-label="Telefone">${icon("phone")}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${year} ${esc(RESTAURANT.name)} · ${esc(RESTAURANT.kind)}</span>
        <span>${esc(RESTAURANT.social.instagram)} · ${esc(RESTAURANT.neighborhood)}, São Paulo</span>
      </div>
      <p class="footer-disclaimer">
        Cardápio demonstrativo — hamburgueria fictícia criada como peça de vitrine da Dalmasio.
        Itens, preços e contatos são ilustrativos.
      </p>
    </div>`;
}

/* ---------- Scrollspy (nav ativa) ---------- */
function setupScrollSpy() {
  const links = [...document.querySelectorAll("[data-spy]")];
  if (!links.length || !("IntersectionObserver" in window)) return;
  const byId = new Map(links.map((l) => [l.getAttribute("data-spy"), l]));
  const targets = [...byId.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          const link = byId.get(e.target.id);
          if (link) link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  targets.forEach((t) => io.observe(t));
}

/* ---------- Boot ---------- */
function boot() {
  renderHeader();
  document.getElementById("main").innerHTML =
    renderHero() + renderMarks() + renderMenu() + renderCombos() + renderInfo();
  renderFooter();

  const fab = document.getElementById("wa-fab");
  if (fab) fab.innerHTML = icon("whatsapp");

  observeReveals(document);
  setupScrollSpy();

  // mensagem leve de boas-vindas (demo)
  if (!sessionStorage.getItem("exemplo.greeted")) {
    sessionStorage.setItem("exemplo.greeted", "1");
    setTimeout(() => toast("Cardápio de demonstração — bom apetite!", "info"), 700);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
