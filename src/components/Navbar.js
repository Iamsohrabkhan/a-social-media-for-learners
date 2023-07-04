import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const active = useRouter().route;

  return (
    <header className="fixed left-0 right-0 z-50 shadow-sm">
      <nav className="fixed left-0 right-0 bg-slate-50 md:static md:text-sm md:border-none">
        <div className="items-center max-w-screen-xl px-4 mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link className="text-lg italic font-bold text-teal-700" href="/">
              <span>Frontendfyi </span>
              <span>Motion</span>
            </Link>
            <div className="md:hidden">
              =
              <button
                onClick={() => setIsOpen(!isOpen) }
                className="flex flex-col w-8 cursor-pointer active:outline-none focus:outline-none"
              >
                <span
                  className={`bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl w-1/2 h-1.5 my-0.5 transition-all duration-500 ease-bounce ${
                    isOpen && "origin-bottom transform-bgr1S-s1"
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl w-full h-1.5 my-0.5 transition-all duration-500 ease-bounce ${
                    isOpen && "origin-top transform-bgr1S-s2"
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl w-3/4 h-1.5 my-0.5 transition-all duration-500 ease-bounce ${
                    isOpen && "origin-bottom transform-bgr1S-s3"
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-end space-y-6 md:flex md:space-x-6 md:space-y-0 ">
              <li className=" group" >
                <Link href="/" className="block h-6 overflow-hidden w-14">
                  <div className="relative">
                    <span
                      className={`absolute block font-medium transition-transform duration-300 translate-y-0 group-hover:-translate-y-full group-hover:text-teal-500 group-hover:font-bold ${
                        active === "/" ? "text-teal-500 font-bold" : ""
                      }`}
                    >
                      Home
                    </span>
                    <span
                      className={`absolute block font-medium transition-transform duration-300 translate-y-full group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold ${
                        active === "/" ? "text-teal-500 font-bold" : ""
                      }`}
                    >
                      Home
                    </span>
                  </div>
                </Link>
              </li>

              <li className=" group" >
                <Link href="/about" className="block h-6 overflow-hidden w-14">
                  <div className="relative">
                    <span
                      className={`absolute block font-medium transition-transform duration-300 translate-y-0 group-hover:-translate-y-full group-hover:text-teal-500 group-hover:font-bold ${
                        active === "/about" ? "text-teal-500 font-bold" : ""
                      }`}
                    >
                      About
                    </span>
                    <span
                      className={`absolute block font-medium transition-transform duration-300 translate-y-full group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold ${
                        active === "/about" ? "text-teal-500 font-bold" : ""
                      }`}
                    >
                      About
                    </span>
                  </div>
                </Link>
              </li>

              <li className=" group" >
                <Link href="/blogs" className="block h-6 overflow-hidden w-14">
                  <div className="relative">
                    <span
                      className={`absolute block font-medium transition-transform duration-300 translate-y-0 group-hover:-translate-y-full group-hover:text-teal-500 group-hover:font-bold ${
                        active === "/blogs" ? "text-teal-500 font-bold" : ""
                      }`}
                    >
                      Blogs
                    </span>
                    <span
                      className={`absolute block font-medium transition-transform duration-300 translate-y-full group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold ${
                        active === "/blogs" ? "text-teal-500 font-bold" : ""
                      }`}
                    >
                      Blogs
                    </span>
                  </div>
                </Link>
              </li>

              <li className=" group" >
                <Link
                  href="/contact"
                  className="block h-6 overflow-hidden w-14"
                >
                  <div className="relative">
                    <span
                      className={`absolute block font-medium transition-transform duration-300 translate-y-0 group-hover:-translate-y-full group-hover:text-teal-500 group-hover:font-bold ${
                        active === "/contact" ? "text-teal-500 font-bold" : ""
                      }`}
                    >
                      Contact
                    </span>
                    <span
                      className={`absolute block font-medium transition-transform duration-300 translate-y-full group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold ${
                        active === "/contact" ? "text-teal-500 font-bold" : ""
                      }`}
                    >
                      Contact
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
