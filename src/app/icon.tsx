import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#062f35",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="22" height="24" viewBox="0 0 38 42" fill="none">
          <path
            d="M2 41L2 19C2 9.06 9.61 1 19 1C28.39 1 36 9.06 36 19L36 41"
            stroke="#f5b63f"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M19 11L21.3 17.7L28.5 20L21.3 22.3L19 29L16.7 22.3L9.5 20L16.7 17.7Z"
            fill="#f5b63f"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
