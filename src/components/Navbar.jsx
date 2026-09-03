import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { contact, doctor } from "../data/practice.js";
import { useBooking } from "./Booking.jsx";

/**
 * One navbar for every page.
 *
 * The doctor's name here is a <span>, not an <h1>. It used to be an <h1> on all five
 * pages, which meant pages shipped two competing <h1>s and the homepage's real
 * heading was demoted to an <h2>. One <h1> per page, describing that page.
 */

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `text-[15px] font-bold transition-colors ${
    isActive ? "text-[#9771e3]" : "text-[#475569] hover:text-[#9771e3]"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 w-full bg-white border-b border-[#9771e3]/10 shadow-sm px-5 py-4 sm:px-8 lg:px-12 flex items-center justify-between"
      >
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo-192.png"
            alt={`${doctor.name}, Gynaecologist and Obstetrician in Mumbai`}
            width="48"
            height="48"
            className="h-10 sm:h-12 w-auto object-contain"
          />
          <span className="flex flex-col">
            <span className="text-sm sm:text-lg font-bold tracking-wide text-[#9771e3] uppercase leading-tight">
              Dr. Poonam Nautiyal
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-[#9771e3]/70 tracking-tight">
              {doctor.credentials}
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 bg-[#9771e3]/10 hover:bg-[#9771e3]/20 text-[#9771e3] px-4 py-2.5 rounded-full font-bold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[14px]">{contact.phoneDisplay}</span>
          </a>
          <button
            onClick={() => openBooking()}
            className="bg-[#9771e3] hover:bg-[#835bc4] text-white flex items-center gap-3 pl-2 pr-6 py-2 rounded-full font-bold shadow-md transition-all"
          >
            <span className="w-8 h-8 rounded-full bg-white text-[#9771e3] flex items-center justify-center" aria-hidden="true">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="text-[15px]">Book Appointment</span>
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#9771e3] p-1"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-5 py-4 space-y-3 shadow-lg">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className="block font-bold text-gray-700 py-1 hover:text-[#9771e3]"
            >
              {l.label}
            </NavLink>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={contact.phoneHref}
              className="text-center bg-[#9771e3]/10 text-[#9771e3] py-2 rounded-xl font-bold"
            >
              {contact.phoneDisplay}
            </a>
            <button
              onClick={() => {
                setOpen(false);
                openBooking();
              }}
              className="w-full bg-[#9771e3] text-white py-2.5 rounded-xl font-bold"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </>
  );
}
