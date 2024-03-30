import React , { useEffect } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../images/Note Master Logo.png";

import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import CreateNewNote from "../components/CreateNewNote";
import NoteCard from "../components/NoteCard";

const Home = () => {

    const { notes, dispatch } = useNotesContext();

    useEffect(() => {
        const fetchNotes = async () => {
          const response = await fetch('/api/notes');
          const json = await response.json();
    
          if (response.ok) {
            dispatch({type: 'SET_NOTES', payload: json});
          }
        }
    
        fetchNotes();
      }, [dispatch])

  const [open, setOpen] = useState(false);

  

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex flex-col min-h-full">
        <div className="grow-0">
          <NavBar />
        </div>
        <div className="grow bg-[#FFE6C7]">
          <header className="bg-[#ffdfb8] shadow">
            <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <div>
            <button
              onClick={() => setOpen(true)} // Set open to true on button click
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Create a new Note
            </button>
            <div>
              <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                        <Transition.Child
                          as={Fragment}
                          enter="transform transition ease-in-out duration-500 sm:duration-700"
                          enterFrom="translate-x-full"
                          enterTo="translate-x-0"
                          leave="transform transition ease-in-out duration-500 sm:duration-700"
                          leaveFrom="translate-x-0"
                          leaveTo="translate-x-full"
                        >
                          <Dialog.Panel className="pointer-events-auto relative w-screen max-w-[800px]">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-in-out duration-500"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in-out duration-500"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                                <button
                                  type="button"
                                  className="relative text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="absolute -inset-2.5" />
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </Transition.Child>
                            <div className="flex h-full flex-col overflow-y-scroll bg-[#FFE6C7] py-6 shadow-xl">
                              <div className="px-4 sm:px-6">
                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                  <div className="flex items-center justify-center mx-auto">
                                    <img
                                      className="w-auto h-20 "
                                      src={logo}
                                      alt="Note Master"
                                    />
                                    <div className="mt-2 font-bold tracking-widest text-center text-transparent text-3xl bg-gradient-to-r from-[#454545] via-[#FF6000] to-[#FFA559] bg-clip-text">
                                      Note Master
                                    </div>
                                  </div>
                                </Dialog.Title>
                              </div>
                              <div className="relative flex-1 px-4 mt-6 sm:px-6">
                                <CreateNewNote
                                  open={open}
                                  setOpen={setOpen}
                                  handleCancel={handleCancel}
                                />
                              </div>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </div>

            <main>
              <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {notes &&
                    notes.map((note) => (
                      <NoteCard note={note} key={note._id} />
                    ))}
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="grow-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
