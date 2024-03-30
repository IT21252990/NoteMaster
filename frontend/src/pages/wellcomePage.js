import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../images/Note Master Logo.png";

const WellcomePage = () => {
  const navigation = [
    { name: "Register", href: "#" },
    { name: "Login", href: "#" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#FFE6C7] h-screen">
      <div className=" hidden lg:flex md:flex relative gap-x-6 items-end justify-end right-10 pt-5">
        <a
          href="/signup"
          className="rounded-md bg-[#FF6000] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FFA559] hover:text-black hover:font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Register
        </a>
        <a
          href="/login"
          className="rounded-md bg-[#FF6000] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FFA559] hover:text-black hover:font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Login
        </a>
      </div>
      <div className=" relative flex lg:hidden md:hidden items-end justify-end right-10 pt-5">
        <button
          type="button"
          className="inline-flex rounded-md p-2.5 text-[#454545]"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Dialog
        as="div"
        className="lg:hidden md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-auto h-[50px] bg-transparent px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-transparent">
          <div className="flex">
            <button
              type="button"
              className="rounded-md text-[#454545]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className=" flex relative gap-x-6 items-end justify-end right-5 pt-1">
              <a
                href="/signup"
                className="rounded-md bg-[#FF6000] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FFA559] hover:text-black hover:font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Register
              </a>
              <a
                href="/login"
                className="rounded-md bg-[#FF6000] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FFA559] hover:text-black hover:font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Login
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <div className="relative isolate px-6 pt-0 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <div className="sm:mb-8 flex justify-center">
              <img className="h-[200px] w-[200px]" src={logo} alt="" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Welcome to
            </h3>
            <div className="font-bold tracking-widest text-center text-transparent text-4xl sm:text-7xl bg-gradient-to-r from-[#454545] via-[#FF6000] to-[#FFA559] bg-clip-text">
              Note Master
            </div>
            <p className="capitalize mt-6 text-sm leading-8 text-[#454545] sm:text-lg font-semibold">
              your personal assistant for organizing your thoughts, ideas, and
              to-dos effortlessly. Whether you're a busy professional, a
              diligent student, or simply someone who loves jotting down notes,
              Note Master is here to make your life easier.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/signup"
                className="rounded-md bg-[#FF6000] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FFA559] hover:text-black hover:font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Get started
              </a>
              <a
                href="/lern_more"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#FF6000]"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellcomePage;
