"use client";
import Link from "next/link";
import ContactButton from "./ContactButton";
import { useLanguage } from "@/context/LanguageContext";

const SERVICE_HREFS = ["/#services", "/#services", "/#services", "/#services", "/#services", "/#services"];
const NAV_HREFS = ["/", "/#about", "/#services", "/#portfolio", "/#team"];

export default function Footer() {
  const { tr } = useLanguage();

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            {/* Company Info */}
            <div className="col-lg-4 col-md-6 footer-info">
              <h3 style={{ color: "#94c045", fontWeight: 700, fontSize: "26px", marginBottom: "16px" }}>Tuplify Technology</h3>
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

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>{tr.footer.quickLinks}</h4>
              <ul>
                <li><Link href={NAV_HREFS[0]}>{tr.footer.home}</Link></li>
                <li><Link href={NAV_HREFS[1]}>{tr.footer.aboutUs}</Link></li>
                <li><Link href={NAV_HREFS[2]}>{tr.nav.services}</Link></li>
                <li><Link href={NAV_HREFS[3]}>{tr.nav.portfolio}</Link></li>
                <li><Link href={NAV_HREFS[4]}>{tr.nav.team}</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>{tr.footer.ourServices}</h4>
              <ul>
                {tr.footer.services.map((s, i) => (
                  <li key={i}><a href={SERVICE_HREFS[i]}>{s}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>{tr.footer.startProject}</h4>
              <p>{tr.footer.ctaText}</p>
              <ContactButton className="footer-contact-btn">
                {tr.footer.contactUs}
              </ContactButton>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong><span>Tuplify Technology</span></strong>. {tr.footer.rights}.
        </div>
      </div>
    </footer>
  );
}
