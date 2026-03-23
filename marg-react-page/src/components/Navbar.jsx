import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/NavbarLogoNew.png";
import iitrLogo from "../assets/images/IITRlogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `hover:text-[#f0642b] ${isActive ? "text-[#f0642b] font-semibold" : "text-[#2e7fb6]"}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="MARG logo" className="h-10 sm:h-12 w-auto" />
        </Link>

        <button className="md:hidden text-neutral-800" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        <ul className="hidden md:flex items-center gap-10">
          <li><NavLink to="/" className={linkClass} end>Home</NavLink></li>
          <li><NavLink to="/people" className={linkClass}>People</NavLink></li>
          <li><a className="text-[#2e7fb6] hover:text-[#f0642b]" href="#research">Research</a></li>
          <li><a className="text-[#2e7fb6] hover:text-[#f0642b]" href="#resources">Resources</a></li>
          <li>
            <a href="#contact" className="rounded-lg border-2 border-neutral-800 bg-[#f0642b] px-7 py-2 text-white font-semibold">
              Join Us
            </a>
          </li>
          <li><img src={iitrLogo} alt="IITR logo" className="h-12 w-auto" /></li>
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <ul className="space-y-1 px-4 py-3">
            <li><NavLink to="/" end className="block rounded px-2 py-2 text-[#2e7fb6]" onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/people" className="block rounded px-2 py-2 text-[#2e7fb6]" onClick={() => setOpen(false)}>People</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
}