import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

import logo from "../images/Note Master Logo.png";
import welcomepic from "../images/Welcome .png";
import Featurespic from "../images/Features.png";
import whypic from "../images/Why Note Master.png";

const LearnMore = () => {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-[#FFE6C7] h-screen">
      <div className="relative items-end justify-end hidden pt-5 lg:flex md:flex gap-x-6 right-10">
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
      <div className="relative flex items-end justify-end pt-5 lg:hidden md:hidden right-10">
        <button
          type="button"
          className="inline-flex rounded-md p-2.5 text-[#454545]"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="w-6 h-6" aria-hidden="true" />
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
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
            <div className="relative flex items-end justify-end pt-1 gap-x-6 right-5">
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
      <div className="relative flex max-w-2xl px-6 pt-0 mx-auto isolate lg:px-8">
        <div className="flex justify-center sm:mb-8">
          <img
            className="h-[200px] w-[200px]"
            src={logo}
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="mt-20 font-bold tracking-widest text-center text-transparent text-4xl sm:text-5xl bg-gradient-to-r from-[#454545] via-[#FF6000] to-[#FFA559] bg-clip-text">
          Note Master
        </div>
      </div>

      <div className="relative isolate overflow-hidden mt-10 bg-[#454545] py-12 sm:py-18 lg:py-20">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Welcome to Note Master.
              </h2>
              <p className="justify-center mt-4 text-lg leading-8 text-gray-300">
                Welcome to Note Master, your personal assistant for organizing
                your thoughts, ideas, and to-dos effortlessly. Whether you're a
                busy professional, a diligent student, or simply someone who
                loves jotting down notes, Note Master is here to make your life
                easier.
              </p>
            </div>
            <div>
              <img
                className="h-[300px] w-[400px] ml-30"
                src={welcomepic}
                alt=""
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#FF6000] to-[#FFA559] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-[#FFA559] py-12 sm:py-18 lg:py-20">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div>
              <img
                className="h-[300px] w-[400px] ml-30"
                src={Featurespic}
                alt=""
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-[#454545] sm:text-4xl">
                Features:
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#454545] justify-center">
                ✔ Create: Quickly jot down your thoughts, ideas, or reminders
                with our easy-to-use note creation tool. <br></br>✔ Update: Edit
                and refine your notes as your thoughts evolve or new information
                arises. <br></br>✔ Delete: Keep your workspace clutter-free by
                easily removing notes you no longer need. <br></br>✔ Read: Dive
                into your notes anytime, anywhere, and gain insights or revisit
                important information effortlessly.<br></br>✔ Secure: Your data
                is encrypted and securely stored, ensuring your privacy and
                confidentiality. <br></br>✔ User-Friendly Interface: Intuitive
                design makes navigating Note Master a breeze, allowing you to
                focus on what matters most—your notes.<br></br>
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#454545] to-[#FFE6C7] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-[#454545] py-12 sm:py-18 lg:py-20">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Why Note Master?
              </h2>
              <p className="justify-center mt-4 text-lg leading-8 text-gray-300">
                Note Master isn't just another note-taking app; it's your
                digital companion designed to empower you to capture, organize,
                and manage your thoughts seamlessly. Say goodbye to scattered
                sticky notes and disorganized notebooks—welcome to the future of
                note-taking with Note Master.
              </p>
            </div>
            <div>
              <img
                className="h-[400px] w-[400px] ml-30"
                src={whypic}
                alt=""
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#FF6000] to-[#FFA559] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="relative isolate overflow-hidden bg-[#FF6000] py-12 sm:py-18 lg:py-20">
        <div className="ml-20">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Join Us:
          </h2>
          <p className="mt-4 text-lg leading-8 text-blackjustify-center">
            Ready to revolutionize the way you take notes? Sign up or log in now
            and start mastering your notes today!
          </p>
        </div>
        <div
          className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#454545] to-white opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="relative isolate overflow-hidden bg-[#454545] py-12 sm:py-18 lg:py-20">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get Started:
              </h2>
              <p className="justify-center mt-4 text-lg leading-8 text-gray-300">
                If you're new here, click on the "Register" button to create
                your Note Master account. If you're already a part of our
                community, simply log in to access your notes and pick up where
                you left off.
              </p>
            </div>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <a
                href="/signup"
                className="rounded-md bg-[#FF6000] px-3.5 py-2.5 text-3xl font-semibold text-white shadow-sm hover:bg-[#FFA559] hover:text-black hover:font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#FF6000] to-[#FFA559] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
