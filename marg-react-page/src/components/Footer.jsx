import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkedAlt,
} from "react-icons/fa";
import footerLogo from "../assets/images/FooterLogoNewWhite.png";

export default function Footer({ showContact = true }) {
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=29.861902745383638,77.89597713138525&query_place_id=ChIJjPysom-26zkR_HOnXXqXU5c";

  return (
    <footer className="border-t border-neutral-200">
      {showContact && (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
            <h2 className="mb-8 text-center text-2xl sm:text-3xl font-bold text-neutral-900">
              Contact Us
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <ul className="space-y-4 text-neutral-700">
                  <li className="flex items-start gap-3">
                    <FaPhone className="mt-1 text-[#f0642b]" />
                    <span>01332 284916</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaEnvelope className="mt-1 text-[#f0642b]" />
                    <span>iitrmarg@gmail.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 text-[#f0642b]" />
                    <span>
                      New Building-Humanities and Social Sciences Department, 4th Floor, H-404,
                      Department of Humanities and Social Sciences, IIT Roorkee, Uttarakhand 247667.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <div className="text-center">
                  <p className="mb-3 text-lg font-semibold text-neutral-800">
                    You can find us on Google Maps
                  </p>
                  <p className="mb-5 text-sm text-neutral-600">
                    Tap below to open the exact location.
                  </p>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-800 bg-[#f0642b] px-5 py-3 font-semibold text-white hover:opacity-90"
                  >
                    <FaMapMarkedAlt size={20} />
                    Open Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-neutral-800 bg-black">
        <div className="mx-auto w-[96%] max-w-375 px-4 py-10">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1.2fr_1fr_1.6fr] items-start">
            <div>
              <h3 className="mb-4 font-semibold tracking-wide text-white">QUICK LINKS</h3>
              <ul className="space-y-3 text-neutral-300">
                <li><Link className="hover:text-[#f0642b]" to="/">Home</Link></li>
                <li><Link className="hover:text-[#f0642b]" to="/people">People</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold tracking-wide text-white">About Us</h3>
              <ul className="space-y-3 text-neutral-300">
                <li>Memory Anxiety Research Group</li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-[#f0642b]" /> iitrmarg@gmail.com
                </li>
                <li>IIT Roorkee,India</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold tracking-wide text-white">FIND US</h3>
              <div className="flex gap-4 text-neutral-300">
                <a className="hover:text-[#f0642b]" href="https://www.facebook.com/profile.php?id=100088522555025" target="_blank" rel="noreferrer"><FaFacebook /></a>
                <a className="hover:text-[#f0642b]" href="https://www.instagram.com/iitrmarg/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a className="hover:text-[#f0642b]" href="https://www.linkedin.com/company/margiitr/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a className="hover:text-[#f0642b]" href="https://www.youtube.com/@margiitr/featured" target="_blank" rel="noreferrer"><FaYoutube /></a>
              </div>
            </div>

            <div className="md:justify-self-end">
              <img src={footerLogo} alt="MARG logo" className="h-24 md:h-28 w-auto" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}