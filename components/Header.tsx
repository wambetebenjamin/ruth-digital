"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`rd-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="rd-container">
        <div className="rd-header__inner">
          <Logo />

          <nav aria-label="Main navigation" className="rd-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rd-nav__link${isActive(link.href) ? " is-active" : ""}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="rd-header__actions">
            <Link href="/contact" className="rd-header__cta">
              <PhoneCall size={16} aria-hidden="true" />
              Book a call
            </Link>
            <button
              type="button"
              className="rd-burger"
              aria-expanded={open}
              aria-controls="rd-mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <div id="rd-mobile-nav" className={`rd-mobile-nav${open ? " is-open" : ""}`}>
        <div className="rd-container">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact">Book a strategy call</Link>
          <a href={`tel:+${site.whatsappNumber}`}>{site.phoneDisplay}</a>
        </div>
      </div>
    </header>
  );
}
