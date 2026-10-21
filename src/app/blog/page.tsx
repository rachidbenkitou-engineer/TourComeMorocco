"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useLanguage } from "@/context/LanguageContext";
import POSTS from "@/data/posts";

const CATEGORIES = [
  { label: "AI & GenAI",           key: "ai-genai"             },
  { label: "ServiceNow",           key: "servicenow"           },
  { label: "Mobile Dev",           key: "mobile-dev"           },
  { label: "Web & SEO",            key: "web-seo"              },
  { label: "Cloud & API",          key: "cloud-api"            },
  { label: "Software Engineering", key: "software-engineering" },
];

const TAGS = ["AI", "GenAI", "ServiceNow", "Mobile", "React Native", "Flutter", "SEO", "Next.js", "API", "Cloud", "ITSM", "Web"];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45, ease: "easeOut" as const },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
};

const sidebarVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.15 } },
};

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
        <div className="container">
          <div className="row">

            {/* Blog entries */}
            <div className="col-lg-8 entries">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory ?? "all"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {filteredPosts.length === 0 ? (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ color: "#646c55", padding: "20px 0" }}
                    >
                      No posts in this category yet.
                    </motion.p>
                  ) : (
                    filteredPosts.map((post, i) => (
                      <motion.article
                        key={post.slug}
                        className="entry"
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
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
                          </ul>
                        </div>
                        <div className="entry-content">
                          <p>{post.excerpt[lang]}</p>
                        </div>
                      </motion.article>
                    ))
                  )}

                  {!activeCategory && (
                    <div className="blog-pagination">
                      <ul className="justify-content-center">
                        <li className="active"><a href="#">1</a></li>
                      </ul>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <motion.div
              className="col-lg-4"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
            >
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
                    {CATEGORIES.map((c) => {
                      const count = POSTS.filter((p) => p.categoryKey === c.key).length;
                      return (
                        <li key={c.key}>
                          <Link
                            href={`/blog?category=${c.key}`}
                            style={{ fontWeight: activeCategory === c.key ? 700 : undefined, color: activeCategory === c.key ? "#94c045" : undefined }}
                          >
                            {c.label} <span>({count})</span>
                          </Link>
                        </li>
                      );
                    })}
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
            </motion.div>

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
