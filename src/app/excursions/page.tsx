import { Suspense } from "react";
import ExcursionsClient from "./ExcursionsClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fff8f0]" />}>
      <ExcursionsClient />
    </Suspense>
  );
}
