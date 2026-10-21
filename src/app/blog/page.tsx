import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = { title: "Blog — Serenity" };

const posts = [
  {
    slug: "dolorum-optio-tempore-voluptas",
    img: "/assets/img/blog/blog-1.jpg",
    title: "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia",
    date: "Sep 1, 2020",
    author: "John Doe",
    category: "Politics",
    excerpt: "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.",
    comments: 12,
  },
  {
    slug: "a-modi-nesciunt-doloribus",
    img: "/assets/img/blog/blog-2.jpg",
    title: "A modi nesciunt doloribus sit iste ratione voluptatem",
    date: "Sep 13, 2020",
    author: "Anna Morison",
    category: "Sports",
    excerpt: "Illum praesentium officia ullam quisquam sint voluptates architecto exercitationem eius omnis similique excepturi.",
    comments: 5,
  },
  {
    slug: "temporibus-sit-alias-delectus",
    img: "/assets/img/blog/blog-3.jpg",
    title: "Temporibus sit alias delectus eligendi possimus magni",
    date: "Sep 22, 2020",
    author: "Mark Donsmark",
    category: "Entertainment",
    excerpt: "Molestiae officiis omnis illo asperiores. Aut doloribus vitae voluptatem aut laudantium ipsam voluptatem voluptatum.",
    comments: 8,
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
        title="Blog"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section id="blog" className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 entries">
              {posts.map((post) => (
                <article key={post.slug} className="entry">
                  <div className="entry-img">
                    <img src={post.img} alt={post.title} className="img-fluid" />
                  </div>
                  <h2 className="entry-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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
                    <p>{post.excerpt}</p>
                    <div className="read-more">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </div>
                  </div>
                </article>
              ))}

              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li><a href="#">1</a></li>
                  <li className="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>
              </div>
            </div>

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
                    <li><a href="#">General <span>(25)</span></a></li>
                    <li><a href="#">Lifestyle <span>(12)</span></a></li>
                    <li><a href="#">Travel <span>(5)</span></a></li>
                    <li><a href="#">Design <span>(22)</span></a></li>
                    <li><a href="#">Creative <span>(8)</span></a></li>
                    <li><a href="#">Education <span>(14)</span></a></li>
                  </ul>
                </div>

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  {posts.slice(0, 3).map((p, i) => (
                    <div key={i} className="post-item d-flex">
                      <img src={`/assets/img/blog/blog-recent-${i + 1}.jpg`} alt="" />
                      <div>
                        <h4><Link href={`/blog/${p.slug}`}>{p.title}</Link></h4>
                        <time dateTime={p.date}>{p.date}</time>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                  <ul>
                    {["App", "IT", "Business", "Mac", "Design", "Office", "Creative", "Studio", "Smart", "Tips", "Marketing"].map((tag) => (
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
