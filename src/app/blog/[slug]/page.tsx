"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { useParams } from "next/navigation";
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
        <div className="container" data-aos="fade-up">
          <div className="row">

            {/* Main article */}
            <div className="col-lg-8 entries">
              <article className="entry entry-single">

                <div className="entry-img">
                  <img src={post.img} alt={post.title[lang]} className="img-fluid" />
                </div>

                <h2 className="entry-title">
                  <a href="#">{post.title[lang]}</a>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person" /> <a href="#">{post.author}</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock" /> <a href="#"><time>{post.date}</time></a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots" /> <a href="#">{post.comments} Comments</a></li>
                  </ul>
                </div>

                <div className="entry-content">
                  {post.content.map((block, i) => renderBlock(block, lang, i))}
                </div>

                <div className="entry-footer">
                  <i className="bi bi-folder" />
                  <ul className="cats">
                    <li><a href="#">{post.category[lang]}</a></li>
                  </ul>
                  <i className="bi bi-tags" />
                  <ul className="tags">
                    {post.tags.map((tag) => (
                      <li key={tag}><a href="#">{tag}</a></li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* Author bio */}
              <div className="blog-author d-flex align-items-center">
                <div>
                  <h4>{post.author}</h4>
                  <div className="social-links">
                    {post.authorLinkedin && (
                      <a href={post.authorLinkedin} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin" />
                      </a>
                    )}
                    {post.authorWebsite && (
                      <a href={post.authorWebsite} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-globe" />
                      </a>
                    )}
                  </div>
                  <p>{post.authorRole[lang]}</p>
                </div>
              </div>

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
                    {[
                      { label: "AI & GenAI", count: 4 },
                      { label: "ServiceNow", count: 3 },
                      { label: "Mobile Dev", count: 5 },
                      { label: "Web & SEO", count: 6 },
                      { label: "Cloud & API", count: 3 },
                      { label: "Software Engineering", count: 8 },
                    ].map((c) => (
                      <li key={c.label}><a href="#">{c.label} <span>({c.count})</span></a></li>
                    ))}
                  </ul>
                </div>

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  {otherPosts.map((p, i) => (
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
                    {["AI", "GenAI", "ServiceNow", "Mobile", "React Native", "Flutter", "SEO", "Next.js", "API", "Cloud", "ITSM", "Web"].map((tag) => (
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
