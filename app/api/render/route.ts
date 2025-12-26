import { renderMedia } from "@remotion/renderer";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title } = await req.json();

  const outputPath = `/tmp/video-${Date.now()}.mp4`;

  await renderMedia({
    composition: "MyVideo",
    serveUrl: "https://your-vercel-app.vercel.app", // 중요
    codec: "h264",
    outputLocation: outputPath,
    inputProps: { title },
  });

  return NextResponse.json({
    ok: true,
    path: outputPath,
  });
}
