import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = { title: "Blog — Noova Technology" };

const POSTS = [
  {
    slug: "dolorum-optio-tempore-voluptas",
    img: "/assets/img/blog/blog-1.jpg",
    title: "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia",
    date: "Jan 1, 2020",
    author: "John Doe",
    comments: 12,
    excerpt: "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.",
  },
  {
    slug: "nisi-magni-odit-consequatur",
    img: "/assets/img/blog/blog-2.jpg",
    title: "Nisi magni odit consequatur autem nulla dolorem",
    date: "Jan 1, 2020",
    author: "John Doe",
    comments: 12,
    excerpt: "Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.",
  },
  {
    slug: "possimus-soluta-ut-id-suscipit",
    img: "/assets/img/blog/blog-3.jpg",
    title: "Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.",
    date: "Jan 1, 2020",
    author: "John Doe",
    comments: 12,
    excerpt: "Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.",
  },
  {
    slug: "non-rem-rerum-nam-cum-quo",
    img: "/assets/img/blog/blog-4.jpg",
    title: "Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.",
    date: "Jan 1, 2020",
    author: "John Doe",
    comments: 12,
    excerpt: "Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.",
  },
];

const RECENT_POSTS = [
  { img: "/assets/img/blog/blog-recent-1.jpg", title: "Nihil blanditiis at in nihil autem", date: "Jan 1, 2020" },
  { img: "/assets/img/blog/blog-recent-2.jpg", title: "Quidem autem et impedit", date: "Jan 1, 2020" },
  { img: "/assets/img/blog/blog-recent-3.jpg", title: "Id quia et et ut maxime similique occaecati ut", date: "Jan 1, 2020" },
  { img: "/assets/img/blog/blog-recent-4.jpg", title: "Laborum corporis quo dara net para", date: "Jan 1, 2020" },
  { img: "/assets/img/blog/blog-recent-5.jpg", title: "Et dolores corrupti quae illo quod dolor", date: "Jan 1, 2020" },
];

const CATEGORIES = [
  { label: "General", count: 25 },
  { label: "Lifestyle", count: 12 },
  { label: "Travel", count: 5 },
  { label: "Design", count: 22 },
  { label: "Creative", count: 8 },
  { label: "Education", count: 14 },
];

const TAGS = ["App", "IT", "Business", "Mac", "Design", "Office", "Creative", "Studio", "Smart", "Tips", "Marketing"];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
        title="Blog"
        subtitle="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">

            {/* Blog entries */}
            <div className="col-lg-8 entries">
              {POSTS.map((post) => (
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
                        <i className="bi bi-clock" /> <a href="#"><time dateTime="2020-01-01">{post.date}</time></a>
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
                  {RECENT_POSTS.map((p, i) => (
                    <div key={i} className="post-item clearfix">
                      <img src={p.img} alt="" />
                      <h4><Link href="#">{p.title}</Link></h4>
                      <time dateTime="2020-01-01">{p.date}</time>
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
