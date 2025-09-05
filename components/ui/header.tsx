import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop menu links + app button */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {/* Footer-based links - visible on md and up */}
            <li className="hidden md:flex items-center gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/company/about-us"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/#features"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href="/#testimonials"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Testimonials
              </Link>
              {/* <Link
                href="https://app.skillrise.me"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                How It Works
              </Link> */}
            </li>

            {/* App button */}
            <li>
              <Link
                href="https://app.skillrise.me"
                className="px-8 py-2 rounded-xl font-semibold text-base bg-[#c1ff72] text-gray-900 border border-[#c1ff72] shadow-sm hover:bg-[#b3f05f] transition flex items-center justify-center"
              >
                Courses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
