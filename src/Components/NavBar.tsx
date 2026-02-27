import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const navLinks = [
  { to: "#About", label: "About" },
  { to: "#Resume", label: "Resume" },
  { to: "#Portfolio", label: "Portfolio" },
  { to: "#Contact", label: "Contact" },
];

const linkClass =
  "-m-1.5 p-1.5 rounded-md font-bold hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 hover:text-orange-500 text-neutral-100";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-neutral-900/50 p-4 backdrop-blur">
      <nav className="mx-auto flex max-w-screen-lg items-center justify-between">
        <span className="font-bold text-white">Alex White</span>

        {/* Desktop links */}
        <ul className="hidden gap-x-8 sm:flex">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link smooth to={to} className={linkClass}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="flex flex-col gap-y-1.5 sm:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center gap-y-4 pb-4 pt-4 sm:hidden">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                smooth
                to={to}
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
