import { generateOGImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Blog — Matthieu de Villele";

export default async function Image({
  params,
}: {
  params: { locale: string };
}) {
  const messages = (await import(`../../../../messages/${params.locale}.json`))
    .default;

  return generateOGImage({
    title: messages.Metadata.blogTitle.split(" | ")[0],
    subtitle: messages.Metadata.blogDescription.split(".").slice(0, 2).join(".") + ".",
    locale: params.locale,
  });
}
