/* EXEMPLO — helpers de UI compartilhados (escape, toast, reveal, formatação). */
import { icon } from "./icons.js";

/* escape básico p/ injeção segura de texto */
export function esc(str) {
  return String(str ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

/* preço em reais — números tabulares no CSS */
export function formatBRL(value) {
  return "R$ " + Number(value).toFixed(2).replace(".", ",");
}

/* ---------- Toast ---------- */
export function toast(message, type = "success", timeout = 3400) {
  const region = document.getElementById("toast-region");
  if (!region) return;
  const el = document.createElement("div");
  el.className = `toast toast--${type}`;
  el.setAttribute("role", type === "error" ? "alert" : "status");
  const ic = type === "error" ? "close" : type === "info" ? "info" : "check";
  el.innerHTML = `<span class="toast__ic">${icon(ic)}</span><span>${esc(message)}</span>`;
  region.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";
    setTimeout(() => el.remove(), 300);
  }, timeout);
}

/* ---------- Reveal on scroll ---------- */
export function observeReveals(root = document) {
  const els = root.querySelectorAll(".reveal:not(.is-in)");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}
