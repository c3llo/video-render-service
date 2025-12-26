import { renderMedia, selectComposition } from "@remotion/renderer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title } = await req.json();

  const serveUrl = process.env.RENDER_BASE_URL!;
  const outputPath = `/tmp/video-${Date.now()}.mp4`;

  // ✅ composition 정보를 먼저 가져온다
  const composition = await selectComposition({
    serveUrl,
    id: "MyVideo",
    inputProps: { title },
  });

  // ✅ composition 객체를 넘긴다 (string ❌)
  await renderMedia({
    composition,
    serveUrl,
    codec: "h264",
    outputLocation: outputPath,
    inputProps: { title },
  });

  return NextResponse.json({ ok: true });
}
