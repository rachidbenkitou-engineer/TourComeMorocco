import ExcursionDetail from "./ExcursionDetail";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ExcursionDetail slug={slug} />;
}
