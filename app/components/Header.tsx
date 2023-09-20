"use client";

import { useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import {
  ArrowUpRightIcon,
  Bars2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Overview", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Work with us", href: "/hiring" },
];

export default function Header() {
  const router = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 w-full">
      {router == "/login" || router == "/signup" ? (
        <></>
      ) : (
        <nav
          className="flex items-center justify-between backdrop-blur-lg px-6 py-8 lg:py-5 gap-5"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className="text-lg font-semibold lg:mb-4">PMO Hiring</h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-16">
            {navigation.map((item, index) => (
              <div
                key={index}
                className={`pb-1 border-gray-300 hover:opacity-70 border-b ${
                  item.href == router ? "border-gray-400" : "border-transparent"
                } hover:border-gray-400 transition duration-150 ease-in-out`}
              >
                <Link href={item.href}>{item.name}</Link>
              </div>
            ))}
          </div>
          <Link
            href={"/login"}
            className={`${
              "/login" == router ? "bg-fuchsia-50 hover:bg-fuchsia-200" : ""
            } hidden lg:flex ms-10 font-medium shadow rounded-xl py-3 px-4 bg-fuchsia-200 text-gray-900 hover:bg-fuchsia-50 transition-colors duration-200 ease-in-out`}
          >
            Get Started
          </Link>
        </nav>
      )}
      <Transition
        as={Fragment}
        show={mobileMenuOpen}
        enter="transition ease-in-out duration-200"
        enterFrom="opacity-0 translate-x-32"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-32"
      >
        <div className="lg:hidden fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#0e0f10] px-6 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-300/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className="text-lg font-semibold">PMO Hiring</h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex flex-row items-center justify-between border-b border-gray-300 py-3 hover:opacity-70">
                      <h1 className="leading-10">{item.name}</h1>
                      <ArrowUpRightIcon className="w-5 h-5" />
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href={"/login"}
                className="grid justify-center mt-12 font-medium shadow rounded-xl py-2 px-4 bg-fuchsia-200 text-gray-900 hover:bg-fuchsia-50 transition-colors duration-200 ease-in-out"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  );
}
