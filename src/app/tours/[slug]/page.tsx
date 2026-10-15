import TourDetail from "./TourDetail";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <TourDetail slug={slug} />;
}
