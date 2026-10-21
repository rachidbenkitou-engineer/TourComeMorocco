import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = { title: "Blog Single — Serenity" };

export default function BlogSinglePage() {
  return (
    <>
      <Breadcrumbs
        title="Blog Single"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Blog Single" }]}
      />

      <section id="blog" className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <div className="entry-img">
                  <img src="/assets/img/blog/blog-inside-post.jpg" alt="" className="img-fluid" />
                </div>
                <h2 className="entry-title">Dolorum optio tempore voluptas dignissimos cumque fuga</h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person" /> <a href="#">John Doe</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock" /> <a href="#"><time>Sep 1, 2020</time></a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots" /> <a href="#">12 Comments</a>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est sequi sit nihil blanditiis inventore.
                  </p>
                  <blockquote>
                    <p>
                      Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
                    </p>
                  </blockquote>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <h3>Et quomodo quae</h3>
                  <p>
                    Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus. Quis consectetur adipiscing elit. Sed ut perspiciatis.
                  </p>
                  <ul>
                    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </p>
                </div>

                <div className="entry-footer">
                  <i className="bi bi-folder2" />
                  <ul className="cats">
                    <li><a href="#">Business</a></li>
                  </ul>
                  <i className="bi bi-tags ms-3" />
                  <ul className="tags">
                    <li><a href="#">Creative</a></li>
                    <li><a href="#">Tips</a></li>
                    <li><a href="#">Marketing</a></li>
                  </ul>
                </div>
              </article>

              <div className="blog-author d-flex align-items-center">
                <img src="/assets/img/blog/blog-author.jpg" className="rounded-circle float-left" alt="" />
                <div>
                  <h4>Jane Smith</h4>
                  <div className="social-links">
                    <a href="#"><i className="bi bi-twitter" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                  </div>
                  <p>
                    Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                  </p>
                </div>
              </div>

              <div className="blog-comments">
                <h4 className="comments-count">8 Comments</h4>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="comment d-flex">
                    <div className="comment-img">
                      <img src={`/assets/img/blog/comments-${i}.jpg`} alt="" />
                    </div>
                    <div>
                      <h5>
                        <a href="#">{["Georgia Reader", "Aron Alvarado", "Lynda Small"][i - 1]}</a>
                        <a href="#" className="reply"><i className="bi bi-reply-fill" /> Reply</a>
                      </h5>
                      <time dateTime="2020-01-01">01 Jan, 2020</time>
                      <p>Et rerum totam nusquam. Corporis dolorum ducimus necessitatibus assumenda.</p>
                    </div>
                  </div>
                ))}

                <div className="reply-form">
                  <h4>Leave a Reply</h4>
                  <p>Your email address will not be published. Required fields are marked *</p>
                  <form>
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                      </div>
                      <div className="col-md-6 form-group">
                        <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col form-group">
                        <input name="website" type="text" className="form-control" placeholder="Your Website" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col form-group">
                        <textarea name="comment" className="form-control" placeholder="Your Comment*" />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Post Comment</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <form>
                    <input type="text" />
                    <button type="submit"><i className="bi bi-search" /></button>
                  </form>
                </div>

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="post-item d-flex">
                      <img src={`/assets/img/blog/blog-recent-${i}.jpg`} alt="" />
                      <div>
                        <h4><Link href="#">Blog Post {i}</Link></h4>
                        <time>Jan {i}, 2020</time>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                  <ul>
                    {["App", "IT", "Business", "Mac", "Design", "Office", "Creative", "Studio"].map((tag) => (
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
