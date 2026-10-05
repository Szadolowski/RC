import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-6">
      <nav
        className="
          relative mx-auto flex min-h-14 max-w-6xl items-center justify-between
          rounded-2xl
          border border-white/10
          bg-black/2
          px-3 sm:h-16 sm:px-5
          backdrop-blur-xl
          shadow-[0_8px_40px_rgba(0,0,0,0.35)]
        "
      >
        <Link
          href="/"
          className="group flex items-center gap-2 font-medium text-white sm:gap-3"
        >
          <span
            className="
              flex size-8 items-center justify-center
              rounded-lg border border-white/10
              bg-white/4
              text-xs font-semibold sm:text-sm
              transition
              group-hover:border-white/20
              group-hover:bg-white/8
            "
          >
            RC
          </span>

          <span className="hidden text-sm text-white/80 sm:block">
            Rafał Curzydło
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                rounded-lg px-4 py-2
                text-sm text-white/50
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--gold-light]/70
                hover:bg-white/5
                hover:text-white
              "
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="
            hidden rounded-xl md:inline-flex
            border border-white/10
            bg-white/6
            px-4 py-2
            text-sm font-medium text-white
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--gold-light]/70
            hover:border-white/20
            hover:bg-white/10
          "
        >
          Contact
          <span className="ml-2 text-white/40">↗</span>
        </Link>

        <details className="group md:hidden">
          <summary
            aria-label="Toggle menu"
            className="flex size-10 cursor-pointer list-none items-center justify-center rounded-xl border border-white/10 bg-white/6 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--gold-light]/70 [&::-webkit-details-marker]:hidden"
          >
            <Menu size={18} className="group-open:hidden" aria-hidden="true" />
            <X
              size={18}
              className="hidden group-open:block"
              aria-hidden="true"
            />
          </summary>

          <div className="absolute left-0 right-0 top-full mt-3 rounded-2xl border border-white/10 bg-black/80 p-2 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/6 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--gold-light]/70"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-1 block rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--gold-light]/70"
            >
              Contact <span className="ml-1 text-white/40">↗</span>
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
