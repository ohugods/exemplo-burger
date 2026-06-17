/* EXEMPLO — biblioteca de ícones SVG (inline, sem dependências).
   Mesma gramática da vitrine Dalmasio: stroke, currentColor, 24x24.
   Sem emoji, sem ícone preenchido de fonte — só line-icons que herdam a cor do texto. */

const svg = (inner, vb = "0 0 24 24") =>
  `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

export const icons = {
  // --- UI / navegação ---
  arrowRight: svg('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>'),
  arrowLeft: svg('<path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/>'),
  chevronRight: svg('<path d="M9 6l6 6-6 6"/>'),
  chevronDown: svg('<path d="M6 9l6 6 6-6"/>'),
  menu: svg('<path d="M3.5 7h17M3.5 12h17M3.5 17h17"/>'),
  close: svg('<path d="M18 6L6 18M6 6l12 12"/>'),
  check: svg('<path d="M20 6L9 17l-5-5"/>'),
  info: svg('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),
  star: svg(
    '<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z" fill="currentColor" stroke="none"/>'
  ),

  // --- contato / localização ---
  phone: svg(
    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>'
  ),
  pin: svg('<path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
  mapPin: svg('<path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
  clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  wallet: svg('<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10.5h18M16.5 14.5h1.5"/>'),
  whatsapp: svg(
    '<path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2z"/><path d="M8.5 7.5c-.3 0-.7.1-.9.5-.3.4-.9 1-.9 2.3s1 2.7 1.1 2.9c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.5-.6 1.7-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.4-.3-.2-1.5-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.6.9-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.2-.8-.7-1.3-1.5-1.4-1.7-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5 .1-.2 0-.4 0-.5-.1-.2-.6-1.5-.8-2-.2-.4-.4-.4-.6-.4z" fill="currentColor" stroke="none"/>'
  ),
  instagram: svg(
    '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'
  ),

  // --- comida / hamburgueria (line, mesma gramática) ---
  flame: svg(
    '<path d="M12 3c-.6 2.5-2.2 3.8-3.4 5.3C7.4 9.6 6.8 10.9 6.8 12.4a5.2 5.2 0 0 0 10.4 0c0-1.9-.9-3.5-2.1-4.8-.4 1.1-1.2 1.7-2.1 1.8C13.7 7.4 13.4 5.1 12 3z"/><path d="M12 20.4a2.4 2.4 0 0 0 2.4-2.4c0-1.3-1.2-2.2-2.4-3.4-1.2 1.2-2.4 2.1-2.4 3.4A2.4 2.4 0 0 0 12 20.4z"/>'
  ),
  burger: svg(
    '<path d="M4 11.2c0-3.5 3.6-5.7 8-5.7s8 2.2 8 5.7"/><path d="M4 11.2h16"/><path d="M4.4 14.7c1.7 0 1.7 1.3 3.4 1.3s1.7-1.3 3.4-1.3 1.7 1.3 3.4 1.3 1.6-1.3 3.4-1.3"/><path d="M5 18h14a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 18z"/><path d="M8.2 8.4h.01M12 7.8h.01M15.8 8.4h.01"/>'
  ),
  fries: svg(
    '<path d="M6.6 9.6h10.8l-.9 9.1a2 2 0 0 1-2 1.8H9.5a2 2 0 0 1-2-1.8z"/><path d="M6.2 9.6l-.4-1.3A1 1 0 0 1 6.8 7h10.4a1 1 0 0 1 1 1.3l-.4 1.3"/><path d="M9.6 9.6V5.6M12 9.6V4M14.4 9.6V6.2"/><path d="M8 13.4h8"/>'
  ),
  drink: svg(
    '<path d="M6.2 8.4h11.6l-1.1 11a2 2 0 0 1-2 1.8H9.3a2 2 0 0 1-2-1.8z"/><path d="M5.6 8.4h12.8"/><path d="M13 4.2l-1.2 4.2M16 4.2l-3 .9"/><path d="M8 12.6h8"/>'
  ),
  iceCream: svg(
    '<path d="M7.5 9.6a4.5 4.5 0 0 1 9 0"/><path d="M7.5 9.6h9"/><path d="M8.3 9.6 12 20.6l3.7-11"/><path d="M9.5 13.1h5M10.4 16.1h3.2"/>'
  ),
  leaf: svg('<path d="M5 19c-1-8.2 4.2-14 14-14 .5 8.7-4.6 14.6-14 14z"/><path d="M5 19c2.6-4.6 6.1-7.6 10-9.3"/>'),
  scooter: svg(
    '<circle cx="6.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><path d="M9 17.5h6"/><path d="M4 8.5h2.6l3 9"/><path d="M15 17.5l-2.4-7.2h4.1"/><path d="M15.6 7.5H19l1.4 4.8"/><path d="M7.2 11h3.2"/>'
  ),
  chef: svg(
    '<path d="M7 14a4 4 0 0 1-1-7.8A3.6 3.6 0 0 1 12 4a3.6 3.6 0 0 1 6 2.2A4 4 0 0 1 17 14z"/><path d="M7 14v4.5A1.5 1.5 0 0 0 8.5 20h7a1.5 1.5 0 0 0 1.5-1.5V14"/><path d="M7.5 17.2h9"/>'
  ),
};

export function icon(name) {
  return icons[name] || "";
}
