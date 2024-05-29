// components/Navbar.tsx
"use client";
import { useState } from "react";
import Container from "../Container/Container";
import Image from "next/image";
import Button from "../Button/Button";
import { Link } from "react-scroll";
import HomeLink from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      {/* Desktop Navbar */}
      <div className="relative lg:h-24 h-14 w-full pb-3 flex justify-between items-center">
        <div className="relative w-1/4 h-full">
          <HomeLink href="/">
            <div className="absolute md:block hidden z-10 lg:top-8 top-2">
              <Image height={127} width={127} src="/logo.svg" alt="logo" />
            </div>
            <div className="absolute md:hidden z-10 top-3">
              <Image height={84} width={84} src="/logo.svg" alt="logo" />
            </div>
          </HomeLink>
        </div>

        <div className="xl:w-full w-1/2 lg:w-[74%] right-0">
          <div className="hidden lg:flex justify-end items-center py-4">
            <ul className="flex space-x-6 lg:mt-3 justify-center items-center">
              <li className="group relative cursor-pointer">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true} // This prop enables smooth (animated) scrolling
                  offset={-70}
                  duration={500}
                >
                  <p className="text-white lg:text-sm text-xs font-medium leading-8">
                    About
                  </p>
                </Link>
                <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer">
                <Link
                  activeClass="active"
                  to="traits"
                  spy={true}
                  smooth={true} // This prop enables smooth (animated) scrolling
                  offset={-70}
                  duration={500}
                >
                  <p className="text-white lg:text-sm text-xs font-medium leading-8">
                    Traits
                  </p>
                </Link>
                <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer">
                <Link
                  activeClass="active"
                  to="roadmap"
                  spy={true}
                  smooth={true} // This prop enables smooth (animated) scrolling
                  offset={-70}
                  duration={500}
                >
                  <p className="text-white lg:text-sm text-xs font-medium leading-8">
                    Roadmap
                  </p>
                </Link>
                <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer">
                <Link
                  activeClass="active"
                  to="utility"
                  spy={true}
                  smooth={true} // This prop enables smooth (animated) scrolling
                  offset={-70}
                  duration={500}
                >
                  <p className="text-white lg:text-sm text-xs font-medium leading-8">
                    Utility
                  </p>
                </Link>
                <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer">
                <Link
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true} // This prop enables smooth (animated) scrolling
                  offset={-70}
                  duration={500}
                >
                  <p className="text-white lg:text-sm text-xs font-medium leading-8">
                    Team
                  </p>
                </Link>
                <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer">
                <Link
                  activeClass="active"
                  to="faq"
                  spy={true}
                  smooth={true} // This prop enables smooth (animated) scrolling
                  offset={-70}
                  duration={500}
                >
                  <p className="text-white lg:text-sm text-xs font-medium leading-8">
                    FAQ
                  </p>
                </Link>
                <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
              <li className="group relative cursor-pointer">
                <Link
                  activeClass="active"
                  to="w3"
                  spy={true}
                  smooth={true} // This prop enables smooth (animated) scrolling
                  offset={-70}
                  duration={500}
                >
                  <p className="text-white lg:text-sm text-xs font-medium leading-8">
                    W3
                  </p>
                </Link>
                <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
              </li>
              <li>
                <Button
                  url="https://crypto.com/nft/collection/395e65e62bde89fe6d51b9445c88b809?tab=items"
                  disabled={false}
                  variant="btn-primary"
                  size="btn-lg"
                >
                  Mint your socker
                </Button>
              </li>
            </ul>
          </div>

          {/* Mobile Navbar */}
          <div className="lg:hidden absolute right-0">
            <button onClick={toggleNavbar}>
              <Image height={20} width={20} src="/menu.svg" alt="menu" />
            </button>

            <div
              className={`fixed border top-0 right-0 pt-5 z-40 px-6 h-full bg-[#3c3c3b] shadow-lg w-full overflow-y-auto transition-transform duration-300 ease-in-out ${
                isOpen ? "" : "transform translate-x-full"
              }`}
            >
              <div className="flex justify-end mt-2" onClick={toggleNavbar}>
                <Image height={20} width={20} src="/cancel.svg" alt="menu" />
              </div>
              <ul className="flex flex-col mt-3 space-y-2 justify-center items-center">
                <li className="group relative cursor-pointer">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true} // This prop enables smooth (animated) scrolling
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-white lg:text-sm text-base font-medium leading-8">
                      About
                    </p>
                  </Link>
                  <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                </li>
                <li className="group relative cursor-pointer">
                  <Link
                    activeClass="active"
                    to="traits"
                    spy={true}
                    smooth={true} // This prop enables smooth (animated) scrolling
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-white lg:text-sm text-base font-medium leading-8">
                      Traits
                    </p>
                  </Link>
                  <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                </li>
                <li className="group relative cursor-pointer">
                  <Link
                    activeClass="active"
                    to="roadmap"
                    spy={true}
                    smooth={true} // This prop enables smooth (animated) scrolling
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-white lg:text-sm text-base font-medium leading-8">
                      Roadmap
                    </p>
                  </Link>
                  <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                </li>
                <li className="group relative cursor-pointer">
                  <Link
                    activeClass="active"
                    to="utility"
                    spy={true}
                    smooth={true} // This prop enables smooth (animated) scrolling
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-white lg:text-sm text-base font-medium leading-8">
                      Utility
                    </p>
                  </Link>
                  <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                </li>
                <li className="group relative cursor-pointer">
                  <Link
                    activeClass="active"
                    to="team"
                    spy={true}
                    smooth={true} // This prop enables smooth (animated) scrolling
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-white lg:text-sm text-base font-medium leading-8">
                      Team
                    </p>
                  </Link>
                  <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                </li>
                <li className="group relative cursor-pointer">
                  <Link
                    activeClass="active"
                    to="faq"
                    spy={true}
                    smooth={true} // This prop enables smooth (animated) scrolling
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-white lg:text-sm text-base font-medium leading-8">
                      FAQ
                    </p>
                  </Link>
                  <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                </li>
                <li className="group relative cursor-pointer pb-3">
                  <Link
                    activeClass="active"
                    to="w3"
                    spy={true}
                    smooth={true} // This prop enables smooth (animated) scrolling
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-white lg:text-sm text-base font-medium leading-8">
                      W3
                    </p>
                  </Link>
                  <hr className="border-1 border-[#578FDE] cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                </li>
                <li>
                  <Button
                    url="https://crypto.com/nft/collection/395e65e62bde89fe6d51b9445c88b809?tab=items"
                    disabled={false}
                    variant="btn-primary"
                    size="btn-slg"
                  >
                    Mint your socker
                  </Button>
                </li>
                <li>
                  <Button
                    url="https://crypto.com/nft/collection/ab513833b988818f4a00c5844a904014?tab=items"
                    disabled={false}
                    variant="btn-transparent"
                    size="btn-slg"
                  >
                    Buy OG Edition
                  </Button>
                </li>
                <li>
                  <Button
                    url="https://crypto.com/nft/collection/395e65e62bde89fe6d51b9445c88b809?tab=items"
                    disabled={false}
                    variant="btn-transparent"
                    size="btn-slg"
                  >
                    Buy Early Edition
                  </Button>
                </li>
              </ul>
              <div className="mt-10 flex flex-col justify-center items-center">
                <p className="text-[13px] font-medium leading-5 space-y-3 text-white">
                  We are exclusively minting on
                </p>
                <Image
                  height={25}
                  width={152}
                  src="/crypto.svg"
                  alt="crypto.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
