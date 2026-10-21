import Link from "next/link";

interface BreadcrumbsProps {
  title: string;
  subtitle?: string;
  crumbs?: { label: string; href?: string }[];
}

export default function Breadcrumbs({ title, subtitle, crumbs }: BreadcrumbsProps) {
  return (
    <section className="breadcrumbs">
      <div className="breadcrumb-hero">
        <div className="container">
          <div className="breadcrumb-hero">
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      </div>
      {crumbs && (
        <div className="container">
          <ol>
            {crumbs.map((c, i) =>
              c.href ? (
                <li key={i}><Link href={c.href}>{c.label}</Link></li>
              ) : (
                <li key={i}>{c.label}</li>
              )
            )}
          </ol>
        </div>
      )}
    </section>
  );
}
