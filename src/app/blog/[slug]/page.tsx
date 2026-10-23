"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import POSTS, { Block } from "@/data/posts";
import type { Lang } from "@/translations";

function renderBlock(block: Block, lang: Lang, i: number) {
  switch (block.type) {
    case "p":
      return <p key={i}>{block.text[lang]}</p>;
    case "h3":
      return <h3 key={i}>{block.text[lang]}</h3>;
    case "blockquote":
      return <blockquote key={i}><p>{block.text[lang]}</p></blockquote>;
    case "img":
      return <img key={i} src={block.src} className="img-fluid" alt="" />;
    case "ul":
      return (
        <ul key={i}>
          {block.items[lang].map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function BlogSinglePage() {
  const { tr, lang } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;

  const post = POSTS.find((p) => p.slug === slug) ?? POSTS[0];
  const otherPosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <>
      <Breadcrumbs
        title={tr.blog.title}
        subtitle={tr.blog.subtitle}
        crumbs={[
          { label: tr.footer.home, href: "/" },
          { label: tr.blog.title, href: "/blog" },
          { label: post.title[lang] },
        ]}
      />

      <section id="blog" className="blog">
        <div className="container">
          <div className="row">

            {/* Main article */}
            <div className="col-lg-8 entries">
              <motion.article
                className="entry entry-single"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <motion.div
                  className="entry-img"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img src={post.img} alt={post.title[lang]} className="img-fluid" />
                </motion.div>

                <motion.h2
                  className="entry-title"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
                >
                  <a href="#">{post.title[lang]}</a>
                </motion.h2>

                <motion.div
                  className="entry-meta"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="#">{post.author}</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="#"><time>{post.date}</time></a></li>
                  </ul>
                </motion.div>

                <motion.div
                  className="entry-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  {post.content.map((block, i) => renderBlock(block, lang, i))}
                </motion.div>

                <motion.div
                  className="entry-footer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                >
                  <i className="bi bi-folder" />
                  <ul className="cats">
                    <li><Link href={`/blog?category=${post.categoryKey}`}>{post.category[lang]}</Link></li>
                  </ul>
                  <i className="bi bi-tags" />
                  <ul className="tags">
                    {post.tags.map((tag) => (
                      <li key={tag}><a href="#">{tag}</a></li>
                    ))}
                  </ul>
                </motion.div>
              </motion.article>

              {/* Author bio */}
              <motion.div
                className="blog-author d-flex align-items-center"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <div>
                  <h4>{post.author}</h4>
                  <div className="social-links">
                    {post.authorLinkedin && (
                      <a href={post.authorLinkedin} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin" />
                      </a>
                    )}
                    {post.authorWebsite && (
                      <a href={post.authorWebsite} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "13px" }}>
                        <i className="bi bi-globe" /> {post.authorWebsite.replace("https://", "").replace(/\/$/, "")}
                      </a>
                    )}
                  </div>
                  <p>{post.authorRole[lang]}</p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              className="col-lg-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
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
                    <li><Link href="/blog">All <span>({POSTS.length})</span></Link></li>
                    {[
                      { label: "AI & GenAI",           key: "ai-genai"             },
                      { label: "ServiceNow",           key: "servicenow"           },
                      { label: "Mobile Dev",           key: "mobile-dev"           },
                      { label: "Web & SEO",            key: "web-seo"              },
                      { label: "Cloud & API",          key: "cloud-api"            },
                      { label: "Software Engineering", key: "software-engineering" },
                    ].map((c) => {
                      const count = POSTS.filter((p) => p.categoryKey === c.key).length;
                      return (
                        <li key={c.key}>
                          <Link
                            href={`/blog?category=${c.key}`}
                            style={post.categoryKey === c.key ? { fontWeight: 700, color: "#94c045" } : undefined}
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
                  {otherPosts.map((p, i) => (
                    <motion.div
                      key={i}
                      className="post-item clearfix"
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                    >
                      <img src={p.img} alt="" />
                      <h4><Link href={`/blog/${p.slug}`}>{p.title[lang]}</Link></h4>
                      <time>{p.date}</time>
                    </motion.div>
                  ))}
                </div>

                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                  <ul>
                    {["AI", "GenAI", "ServiceNow", "Mobile", "React Native", "Flutter", "SEO", "Next.js", "API", "Cloud", "ITSM", "Web"].map((tag) => (
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
