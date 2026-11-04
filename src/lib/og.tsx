import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

async function loadFont(family: string): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:woff2|truetype|opentype)'\)/)?.[1];
    return url ? fetch(url).then((r) => r.arrayBuffer()) : null;
  } catch {
    return null;
  }
}

type Props = { title: string; price: string; priceNote: string; name: string };

export async function generateOGImage({ title, price, priceNote, name }: Props) {
  const font = await loadFont("Archivo Black");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#12372A",
          color: "#F4F1EA",
          fontFamily: font ? "Archivo Black" : "sans-serif",
        }}
      >
        <div style={{ fontSize: 34, textTransform: "uppercase" }}>{name}</div>
        <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
          <div style={{ fontSize: 110, lineHeight: 1 }}>{price}</div>
          <div style={{ fontSize: 36 }}>{priceNote}</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: font ? [{ name: "Archivo Black", data: font, weight: 400, style: "normal" }] : undefined,
    }
  );
}
