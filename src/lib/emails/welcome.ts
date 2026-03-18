export function welcomeEmail({
  firstName,
  source,
}: {
  firstName?: string;
  source: "contact" | "newsletter";
}): { subject: string; html: string } {
  const greeting = firstName ? `Bonjour ${firstName}` : "Bonjour";

  const introText =
    source === "contact"
      ? "Merci d'avoir pris le temps de me contacter via mon site. J'ai bien reçu ton message et je te réponds très prochainement — en général sous 24h."
      : "Merci de t'être abonné à ma newsletter. Tu recevras régulièrement des insights sur l'automatisation et l'IA appliquées aux business.";

  const subject =
    source === "contact"
      ? "Message bien reçu — Matthieu de Villèle"
      : "Bienvenue dans la newsletter — Matthieu de Villèle";

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
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 24px;font-size:22px;font-family:Georgia,serif;font-weight:bold;color:#1a1917;line-height:1.3;">
                ${greeting} 👋
              </p>
              <p style="margin:0 0 20px;font-size:14px;color:#4b4a46;line-height:1.7;">
                ${introText}
              </p>
              <p style="margin:0 0 20px;font-size:14px;color:#4b4a46;line-height:1.7;">
                En attendant, voici un aperçu rapide de ce que je fais&nbsp;: j'aide les entrepreneurs et PME à <strong>automatiser leurs processus métier</strong> grâce à l'IA — de la génération de leads à la gestion de contenu, en passant par les workflows internes.
              </p>
              <p style="margin:0;font-size:14px;color:#4b4a46;line-height:1.7;">
                N'hésite pas à explorer mes projets ou à réserver un créneau directement dans mon agenda.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="border-top:1px solid #e2e0d8;"></div>
            </td>
          </tr>

          <!-- Links -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 16px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#9ca3af;">
                ME RETROUVER
              </p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:6px 0;">
                    <a href="https://matthieu-portfolio.vercel.app/fr" style="color:#2563eb;text-decoration:none;font-size:13px;">
                      → Portfolio &amp; projets
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 0;">
                    <a href="https://linkedin.com/in/matthieudevillele" style="color:#2563eb;text-decoration:none;font-size:13px;">
                      → LinkedIn
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 0;">
                    <a href="https://github.com/MatthdV" style="color:#2563eb;text-decoration:none;font-size:13px;">
                      → GitHub
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 0;">
                    <a href="https://calendly.com/matthieudevillele" style="color:#fbbf24;text-decoration:none;font-size:13px;font-weight:bold;">
                      → Réserver un call de 30 min
                    </a>
                  </td>
                </tr>
              </table>
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
              <p style="margin:0 0 4px;font-size:13px;color:#1a1917;">Matthieu de Villèle</p>
              <p style="margin:0;font-size:12px;color:#9ca3af;">Consultant Automation &amp; IA · matthieu.devillele@gmail.com</p>
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
