export function welcomeEmail({
  firstName,
  source,
}: {
  firstName?: string;
  source: "contact" | "newsletter";
}): { subject: string; html: string } {
  const greeting = firstName ? `Bonjour ${firstName},` : "Bonjour,";

  const subject =
    source === "contact"
      ? "Bien reçu."
      : "Vous êtes dans la boucle.";

  const bodyContent =
    source === "contact"
      ? `
        <p style="margin:0 0 20px;font-size:15px;color:#4b4a46;line-height:1.8;">
          J'ai bien reçu votre message, merci.
        </p>
        <p style="margin:0 0 20px;font-size:15px;color:#4b4a46;line-height:1.8;">
          Je reviens vers vous sous 24h. En général c'est moins, mais autant être honnête au cas où j'aie la tête dans un projet.
        </p>
        <p style="margin:0 0 20px;font-size:15px;color:#4b4a46;line-height:1.8;">
          Si vous voulez vous faire une idée de mon travail en attendant, mon
          <a href="https://matthieu-portfolio.vercel.app/fr" style="color:#2563eb;text-decoration:none;">portfolio</a>
          et mon
          <a href="https://github.com/MatthdV" style="color:#2563eb;text-decoration:none;">GitHub</a>
          sont là pour ça.
        </p>
        <p style="margin:0 0 32px;font-size:15px;color:#4b4a46;line-height:1.8;">
          Et si vous préférez qu'on échange directement plutôt que d'attendre,
          <a href="https://calendly.com/matthieudevillele" style="color:#2563eb;text-decoration:none;font-weight:600;">mon Calendly est ouvert</a>.
        </p>
        <p style="margin:0;font-size:15px;color:#4b4a46;line-height:1.8;">
          À très vite,<br/>Matthieu
        </p>
      `
      : `
        <p style="margin:0 0 20px;font-size:15px;color:#4b4a46;line-height:1.8;">
          Vous venez de rejoindre la newsletter — bienvenue.
        </p>
        <p style="margin:0 0 20px;font-size:15px;color:#4b4a46;line-height:1.8;">
          Le fil directeur : ce que l'IA et l'automatisation peuvent vraiment faire, au-delà des démos impressionnantes et des promesses marketing. Des cas concrets, des outils que j'utilise réellement, des expérimentations qui ont marché — et parfois celles qui n'ont pas marché.
        </p>
        <p style="margin:0 0 20px;font-size:15px;color:#4b4a46;line-height:1.8;">
          Pas de framework en 7 étapes ni de "10 façons de transformer votre business avec l'IA." Juste ce que je trouve utile à partager.
        </p>
        <p style="margin:0 0 20px;font-size:15px;color:#4b4a46;line-height:1.8;">
          La fréquence ? Quand j'ai quelque chose à dire. Ça peut être toutes les semaines, ça peut être deux fois par mois.
        </p>
        <p style="margin:0 0 32px;font-size:15px;color:#4b4a46;line-height:1.8;">
          Si vous voulez voir qui je suis avant le prochain numéro —
          <a href="https://matthieu-portfolio.vercel.app/fr" style="color:#2563eb;text-decoration:none;">mon portfolio</a>
          et mon
          <a href="https://linkedin.com/in/matthieudevillele" style="color:#2563eb;text-decoration:none;">LinkedIn</a>
          sont là pour ça.
        </p>
        <p style="margin:0;font-size:15px;color:#4b4a46;line-height:1.8;">
          À bientôt,<br/>Matthieu
        </p>
      `;

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f4ef;font-family:'Courier New',Courier,monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f4ef;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#fafaf7;border:1px solid #e2e0d8;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 24px;border-bottom:2px solid #2563eb;">
              <p style="margin:0;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:#2563eb;">
                MATTHIEU DE VILLÈLE
              </p>
              <p style="margin:6px 0 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;">
                Automation &amp; IA
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 40px;">
              <p style="margin:0 0 28px;font-size:15px;color:#1a1917;line-height:1.8;font-weight:600;">
                ${greeting}
              </p>
              ${bodyContent}
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="border-top:1px solid #e2e0d8;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px 32px;">
              <p style="margin:0 0 8px;font-size:12px;color:#9ca3af;">
                <a href="https://matthieu-portfolio.vercel.app/fr" style="color:#9ca3af;text-decoration:none;">Portfolio</a>
                &nbsp;·&nbsp;
                <a href="https://linkedin.com/in/matthieudevillele" style="color:#9ca3af;text-decoration:none;">LinkedIn</a>
                &nbsp;·&nbsp;
                <a href="https://github.com/MatthdV" style="color:#9ca3af;text-decoration:none;">GitHub</a>
                &nbsp;·&nbsp;
                <a href="https://calendly.com/matthieudevillele" style="color:#9ca3af;text-decoration:none;">Calendly</a>
              </p>
              <p style="margin:0;font-size:12px;color:#c4c2ba;">matthieu.devillele@gmail.com</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}
