import { Suspense } from "react";
import ToursClient from "./ToursClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fff8f0]" />}>
      <ToursClient />
    </Suspense>
  );
}
