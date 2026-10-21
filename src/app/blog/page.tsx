"use client";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useLanguage } from "@/context/LanguageContext";
import POSTS from "@/data/posts";

const RECENT_POSTS = [
  { img: "/assets/img/blog/blog-recent-1.jpg", title: "Nihil blanditiis at in nihil autem", date: "Jan 1, 2020" },
  { img: "/assets/img/blog/blog-recent-2.jpg", title: "Quidem autem et impedit", date: "Jan 1, 2020" },
  { img: "/assets/img/blog/blog-recent-3.jpg", title: "Id quia et et ut maxime similique occaecati ut", date: "Jan 1, 2020" },
  { img: "/assets/img/blog/blog-recent-4.jpg", title: "Laborum corporis quo dara net para", date: "Jan 1, 2020" },
  { img: "/assets/img/blog/blog-recent-5.jpg", title: "Et dolores corrupti quae illo quod dolor", date: "Jan 1, 2020" },
];

const CATEGORIES = [
  { label: "AI & GenAI", count: 4 },
  { label: "ServiceNow", count: 3 },
  { label: "Mobile Dev", count: 5 },
  { label: "Web & SEO", count: 6 },
  { label: "Cloud & API", count: 3 },
  { label: "Software Engineering", count: 8 },
];

const TAGS = ["AI", "GenAI", "ServiceNow", "Mobile", "React Native", "Flutter", "SEO", "Next.js", "API", "Cloud", "ITSM", "Web"];

export default function BlogPage() {
  const { tr, lang } = useLanguage();

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
              {POSTS.map((post) => (
                <article key={post.slug} className="entry">
                  <div className="entry-img">
                    <img src={post.img} alt={post.title[lang]} className="img-fluid" />
                  </div>
                  <h2 className="entry-title">
                    <Link href={`/blog/${post.slug}`}>{post.title[lang]}</Link>
                  </h2>
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
                    <div className="read-more">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </div>
                  </div>
                </article>
              ))}

              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>
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
                    {CATEGORIES.map((c) => (
                      <li key={c.label}><a href="#">{c.label} <span>({c.count})</span></a></li>
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
