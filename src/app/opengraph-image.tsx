import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #7ec4f8 0%, #57a9f5 60%, #3d8fe0 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 84,
              height: 84,
              borderRadius: 28,
              background: "rgba(255,255,255,0.22)",
            }}
          />
          <div style={{ fontSize: 76, fontWeight: 700, color: "white" }}>
            Climato
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            color: "rgba(255,255,255,0.92)",
            textAlign: "center",
            maxWidth: 880,
          }}
        >
          Weather that doesn&apos;t just show data — it guides you.
        </div>
      </div>
    ),
    { ...size }
  );
}
