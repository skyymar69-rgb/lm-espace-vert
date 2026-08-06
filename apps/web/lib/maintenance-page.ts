// Page « coming soon » servie par le middleware pendant la maintenance.
// Volontairement autonome (HTML + CSS inline, aucune ressource externe) : elle est
// renvoyée directement depuis l'Edge, sans passer par le layout du site (header,
// footer, analytics…). Pour changer le texte, éditer uniquement ce fichier.
//
// Aucun moyen de contact n'y figure volontairement : ni téléphone, ni WhatsApp, ni
// e-mail, ni lien vers les réseaux sociaux. Le client ne doit pas être sollicité
// pendant la fermeture.

export const maintenanceHtml = /* html */ `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>LM Espace Vert — Site en maintenance</title>
<meta name="description" content="Le site LM Espace Vert, paysagiste à Saint-Didier-au-Mont-d'Or, est temporairement en maintenance. Il sera de retour très prochainement.">
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
  .divider { margin: 32px 0 0; border: 0; border-top: 1px solid var(--border); }
  footer { margin-top: 20px; font-size: 0.8125rem; color: var(--muted); }
  @media (max-width: 480px) {
    main { padding: 36px 22px; border-radius: 20px; }
  }
</style>
</head>
<body>
<main>
  <img class="logo" src="/logo.png" alt="LM Espace Vert" width="132" height="132">

  <span class="badge"><span class="pulse"></span>Maintenance en cours</span>

  <h1>Nous préparons le terrain</h1>

  <p>Le site de <strong>LM Espace Vert</strong> est momentanément indisponible, le temps d'une mise à jour.</p>
  <p>Il sera de retour très prochainement.</p>

  <hr class="divider">

  <footer>LM Espace Vert — Paysagiste créateur, Lyon nord &amp; Mont d'Or</footer>
</main>
</body>
</html>`
