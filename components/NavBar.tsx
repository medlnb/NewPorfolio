"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFigma } from "react-icons/fa";

function NavBar() {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <header className="w-full flex justify-between md:text-base text-xs items-center bg-black border-t border-b border-black z-10 ">
      <nav className="flex">
        <Link
          href="/"
          className={` md:text-white border-l border-r border-black py-3 md:px-20 px-2 relative ${
            pathname === "/" ? "active" : ""
          }`}
        >
          _hello
        </Link>
        <Link
          href="/aboutme"
          className={`md:text-white border-l border-r border-black py-3 md:px-20 px-2 relative ${
            pathname === "/aboutme" ? "active" : ""
          }`}
        >
          _about me
        </Link>
        <Link
          href="/myworks"
          className={`md:text-white border-l border-r border-black py-3 md:px-20 px-2 relative ${
            pathname === "/myworks" ? "active" : ""
          }`}
        >
          _skills & _projects
        </Link>
      </nav>
      <a
        target="_blank"
        href="https://www.figma.com/file/kM6G8u4jp614eaqWovQ3wS/Resume-(Copy)?type=design&node-id=0%3A1&mode=design&t=0YMghWM1ZyDr2ykN-1"
        className="flex items-center gap-1 py-3 md:mx-20 mx-2 hover:text-yellow-500"
      >
        <FaFigma /> resume.get()
      </a>
    </header>
  );
}

export default NavBar;
