import Link from "next/link";
import ContactButton from "./ContactButton";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            {/* Company Info */}
            <div className="col-lg-4 col-md-6 footer-info">
              <h3 style={{ color: "#94c045", fontWeight: 700, fontSize: "26px", marginBottom: "16px" }}>Noova Technology</h3>
              <p>
                Morocco<br /><br />
                <strong>Phone:</strong> +212 655 407 529<br />
                <strong>Email:</strong> contact@noovatechnology.com
              </p>
              <div className="social-links mt-3">
                <a href="https://www.linkedin.com/in/rachidbenkitou/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin" /></a>
                <a href="#"><i className="bx bxl-github" /></a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#about">About us</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li><Link href="/#portfolio">Portfolio</Link></li>
                <li><Link href="/#team">Team</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="/#services">Web Apps & CRM</a></li>
                <li><a href="/#services">Mobile Development</a></li>
                <li><a href="/#services">Website & SEO</a></li>
                <li><a href="/#services">ServiceNow Apps</a></li>
                <li><a href="/#services">Artificial Intelligence</a></li>
                <li><a href="/#services">Cloud & API Integration</a></li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Start a Project</h4>
              <p>Have an idea? Let&apos;s build it together. Reach out and we&apos;ll get back to you quickly.</p>
              <ContactButton
                className="footer-contact-btn"
              >
                Contact Us
              </ContactButton>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong><span>Noova Technology</span></strong>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
