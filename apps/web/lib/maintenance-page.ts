// Page « coming soon » servie par le middleware pendant la maintenance.
// Volontairement autonome (HTML + CSS inline, aucune ressource externe) : elle est
// renvoyée directement depuis l'Edge, sans passer par le layout du site (header,
// footer, analytics…). Pour changer le texte, éditer uniquement ce fichier.

import { PHONE_DISPLAY, PHONE_E164, EMAIL } from './business'
import { WHATSAPP, INSTAGRAM, FACEBOOK } from './social'

export const maintenanceHtml = /* html */ `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>LM Espace Vert — Site en maintenance</title>
<meta name="description" content="Le site LM Espace Vert est temporairement en maintenance. Votre paysagiste à Saint-Didier-au-Mont-d'Or reste joignable au ${PHONE_DISPLAY}.">
<meta name="theme-color" content="#4A6320">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  :root {
    --olive: #749A30;
    --olive-text: #4A6320;
    --olive-deep: #3A5018;
    --bg: #F4F1E9;
    --card: #FFFFFF;
    --fg: #2A2F33;
    --muted: #5C606B;
    --border: #E7E2D6;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #14171A;
      --card: #1C2024;
      --fg: #ECEFF1;
      --muted: #A2A8B0;
      --border: #2C3237;
      --olive-text: #A8C86B;
    }
  }
  html, body { margin: 0; padding: 0; }
  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: var(--bg);
    color: var(--fg);
    font-family: 'Outfit', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  /* Halo végétal discret en fond */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 0;
    background:
      radial-gradient(60rem 40rem at 15% -10%, rgba(116, 154, 48, 0.18), transparent 60%),
      radial-gradient(50rem 35rem at 110% 110%, rgba(158, 75, 71, 0.12), transparent 60%);
    pointer-events: none;
  }
  main {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 620px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 48px 40px;
    text-align: center;
    box-shadow: 0 24px 60px -30px rgba(42, 47, 51, 0.35);
    animation: rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  @keyframes rise {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    main { animation: none; }
    .pulse { animation: none; }
  }
  .logo { width: 132px; height: auto; margin: 0 auto 28px; display: block; border-radius: 16px; }
  /* Le logo est dessiné pour un fond clair : on lui garde son support en dark mode. */
  @media (prefers-color-scheme: dark) {
    .logo { background: #FFFFFF; padding: 10px; }
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 999px;
    background: rgba(116, 154, 48, 0.14);
    color: var(--olive-text);
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  .pulse {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--olive);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.45; transform: scale(0.75); }
  }
  h1 {
    margin: 20px 0 12px;
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    line-height: 1.15;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--olive-text);
  }
  p { margin: 0 auto; max-width: 46ch; color: var(--muted); }
  p + p { margin-top: 14px; }
  .actions {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 22px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.9375rem;
    text-decoration: none;
    border: 1px solid transparent;
    transition: transform 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;
  }
  .btn:hover { transform: translateY(-1px); }
  .btn:focus-visible { outline: 3px solid var(--olive); outline-offset: 3px; }
  .btn-primary { background: var(--olive-text); color: #FFFFFF; }
  .btn-primary:hover { background: var(--olive-deep); }
  .btn-ghost { border-color: var(--border); color: var(--fg); }
  .btn-ghost:hover { border-color: var(--olive); color: var(--olive-text); }
  /* En dark, --olive-text s'éclaircit : le texte du bouton plein repasse en sombre. */
  @media (prefers-color-scheme: dark) {
    .btn-primary { color: #14171A; }
    .btn-primary:hover { background: #BCD886; }
  }
  .divider { margin: 32px 0 0; border: 0; border-top: 1px solid var(--border); }
  .social {
    margin-top: 20px;
    display: flex;
    gap: 18px;
    justify-content: center;
    font-size: 0.875rem;
  }
  .social a { color: var(--muted); text-decoration: none; }
  .social a:hover { color: var(--olive-text); text-decoration: underline; }
  footer { margin-top: 24px; font-size: 0.8125rem; color: var(--muted); }
  @media (max-width: 480px) {
    main { padding: 36px 22px; border-radius: 20px; }
    .btn { width: 100%; justify-content: center; }
  }
</style>
</head>
<body>
<main>
  <img class="logo" src="/logo.png" alt="LM Espace Vert" width="132" height="132">

  <span class="badge"><span class="pulse"></span>Maintenance en cours</span>

  <h1>Nous préparons le terrain</h1>

  <p>Le site de <strong>LM Espace Vert</strong> est momentanément indisponible, le temps d'une mise à jour. Il sera de retour très prochainement.</p>
  <p>Entre-temps, votre paysagiste à Saint-Didier-au-Mont-d'Or reste joignable : devis, conseils et interventions se poursuivent normalement.</p>

  <div class="actions">
    <a class="btn btn-primary" href="tel:${PHONE_E164}">Appeler le ${PHONE_DISPLAY}</a>
    <a class="btn btn-ghost" href="mailto:${EMAIL}">Écrire un e-mail</a>
  </div>

  <hr class="divider">

  <div class="social">
    <a href="${WHATSAPP}" rel="noopener noreferrer" target="_blank">WhatsApp</a>
    <a href="${INSTAGRAM}" rel="noopener noreferrer" target="_blank">Instagram</a>
    <a href="${FACEBOOK}" rel="noopener noreferrer" target="_blank">Facebook</a>
  </div>

  <footer>LM Espace Vert — Paysagiste créateur, Lyon nord &amp; Mont d'Or</footer>
</main>
</body>
</html>`
