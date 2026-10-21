"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useLanguage } from "@/context/LanguageContext";
import POSTS from "@/data/posts";

const CATEGORIES = [
  { label: "AI & GenAI",           key: "ai-genai",              count: 4 },
  { label: "ServiceNow",           key: "servicenow",            count: 3 },
  { label: "Mobile Dev",           key: "mobile-dev",            count: 5 },
  { label: "Web & SEO",            key: "web-seo",               count: 6 },
  { label: "Cloud & API",          key: "cloud-api",             count: 3 },
  { label: "Software Engineering", key: "software-engineering",  count: 8 },
];

const TAGS = ["AI", "GenAI", "ServiceNow", "Mobile", "React Native", "Flutter", "SEO", "Next.js", "API", "Cloud", "ITSM", "Web"];

function BlogContent() {
  const { tr, lang } = useLanguage();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const filteredPosts = activeCategory
    ? POSTS.filter((p) => p.categoryKey === activeCategory)
    : POSTS;

  return (
    <>
      <Breadcrumbs
        title={tr.blog.title}
        subtitle={tr.blog.subtitle}
        crumbs={[{ label: tr.footer.home, href: "/" }, { label: tr.blog.title }]}
      />

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">

            {/* Blog entries */}
            <div className="col-lg-8 entries">
              {filteredPosts.length === 0 ? (
                <p style={{ color: "#646c55", padding: "20px 0" }}>No posts in this category yet.</p>
              ) : (
                filteredPosts.map((post) => (
                  <article key={post.slug} className="entry">
                    <div className="entry-img">
                      <img src={post.img} alt={post.title[lang]} className="img-fluid" />
                    </div>
                    <h2 className="entry-title">
                      <Link href={`/blog/${post.slug}`}>{post.title[lang]}</Link>
                    </h2>
                    <div className="read-more" style={{ marginBottom: "12px" }}>
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </div>
                    <div className="entry-meta">
                      <ul>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-person" /> <a href="#">{post.author}</a>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-clock" /> <a href="#"><time>{post.date}</time></a>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-chat-dots" /> <a href="#">{post.comments} Comments</a>
                        </li>
                      </ul>
                    </div>
                    <div className="entry-content">
                      <p>{post.excerpt[lang]}</p>
                    </div>
                  </article>
                ))
              )}

              {!activeCategory && (
                <div className="blog-pagination">
                  <ul className="justify-content-center">
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar">

                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <form action="">
                    <input type="text" />
                    <button type="submit"><i className="bi bi-search" /></button>
                  </form>
                </div>

                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li>
                      <Link
                        href="/blog"
                        style={{ fontWeight: !activeCategory ? 700 : undefined, color: !activeCategory ? "#94c045" : undefined }}
                      >
                        All <span>({POSTS.length})</span>
                      </Link>
                    </li>
                    {CATEGORIES.map((c) => (
                      <li key={c.key}>
                        <Link
                          href={`/blog?category=${c.key}`}
                          style={{ fontWeight: activeCategory === c.key ? 700 : undefined, color: activeCategory === c.key ? "#94c045" : undefined }}
                        >
                          {c.label} <span>({c.count})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  {POSTS.map((p, i) => (
                    <div key={i} className="post-item clearfix">
                      <img src={p.img} alt="" />
                      <h4><Link href={`/blog/${p.slug}`}>{p.title[lang]}</Link></h4>
                      <time>{p.date}</time>
                    </div>
                  ))}
                </div>

                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                  <ul>
                    {TAGS.map((tag) => (
                      <li key={tag}><a href="#">{tag}</a></li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={null}>
      <BlogContent />
    </Suspense>
  );
}
