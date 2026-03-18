import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

async function loadFont(family: string, weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}`,
      { next: { revalidate: 86400 } }
    ).then((res) => res.text());
    const match = css.match(/src: url\((.+?)\)/);
    if (!match?.[1]) return null;
    return fetch(match[1]).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export async function generateOGImage({
  title,
  subtitle,
  locale,
}: {
  title: string;
  subtitle: string;
  locale: string;
}) {
  const [spaceGrotesk, jetbrainsMono] = await Promise.all([
    loadFont("Space Grotesk", 700),
    loadFont("JetBrains Mono", 400),
  ]);

  const fonts: { name: string; data: ArrayBuffer; weight: 400 | 700 }[] = [];
  if (spaceGrotesk) {
    fonts.push({ name: "Space Grotesk", data: spaceGrotesk, weight: 700 });
  }
  if (jetbrainsMono) {
    fonts.push({ name: "JetBrains Mono", data: jetbrainsMono, weight: 400 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#0a0a0a",
          color: "#f5f5f0",
          fontFamily: "Space Grotesk, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative marker strokes */}
        <div
          style={{
            position: "absolute",
            top: "45px",
            right: "80px",
            width: "120px",
            height: "4px",
            backgroundColor: "#1A65FF",
            transform: "rotate(-5deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "100px",
            width: "60px",
            height: "4px",
            backgroundColor: "#FFCD2E",
            transform: "rotate(-3deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "140px",
            right: "80px",
            width: "80px",
            height: "4px",
            backgroundColor: "#FE342C",
            transform: "rotate(3deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "155px",
            right: "110px",
            width: "40px",
            height: "4px",
            backgroundColor: "#1A65FF",
            transform: "rotate(1deg)",
            display: "flex",
          }}
        />

        {/* Top: Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            matthieu
          </span>
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#1A65FF",
            }}
          >
            .
          </span>
        </div>

        {/* Middle: Title + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 56,
                fontWeight: 700,
                letterSpacing: "-2px",
                lineHeight: 1.15,
                maxWidth: "900px",
              }}
            >
              {title}
            </span>
            {/* Marker underline */}
            <div
              style={{
                display: "flex",
                width: "200px",
                height: "8px",
                backgroundColor: "#FFCD2E",
                marginTop: "12px",
                transform: "skewX(-12deg)",
              }}
            />
          </div>
          <span
            style={{
              fontSize: 20,
              color: "#888888",
              fontFamily: "JetBrains Mono, monospace",
              maxWidth: "700px",
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </span>
        </div>

        {/* Bottom: URL + locale badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontFamily: "JetBrains Mono, monospace",
              color: "#888888",
            }}
          >
            matthieudevillele.com
          </span>
          <div
            style={{
              display: "flex",
              fontSize: 14,
              fontFamily: "JetBrains Mono, monospace",
              color: "#1A65FF",
              border: "2px solid #1A65FF",
              padding: "4px 14px",
              letterSpacing: "1px",
            }}
          >
            {locale.toUpperCase()}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts,
    }
  );
}
