import { Suspense } from "react";
import TransfersClient from "./TransfersClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fff8f0]" />}>
      <TransfersClient />
    </Suspense>
  );
}
