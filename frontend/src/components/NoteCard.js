import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useNotesContext } from "../hooks/useNotesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import Swal from "sweetalert2";

import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../images/Note Master Logo.png";

import UpdateNote from "./UpdateNote";

const NoteCard = ({ note }) => {
  const { dispatch } = useNotesContext();
  const { user } = useAuthContext();
  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);

  const handleClick = async () => {
    if (!user) {
      return;
    }

    // Display confirmation message using SweetAlert2
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#FFA559",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmResult.isConfirmed) {
      const response = await fetch("/api/notes/" + note._id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_NOTE", payload: json });
      }
    }
  };

  const formattedDistance = formatDistanceToNow(new Date(note.createdAt), {
    addSuffix: true,
  });

  const handleCancel = () => {
    setUpdateOpen(false);
  };

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer bg-[#ffcb8a] px-10 pt-5 pb-10 flex flex-col items-start justify-between rounded rounded-t-3xl shadow-lg"
      >
        <div className="relative group ">
          <h3 className=" text-md font-bold leading-6 text-[#454545] group-hover:text-[#FF6000]">
            {note.title}
          </h3>
        </div>
        <div className="grow">
          <p className="mt-5 text-sm font-semibold leading-6 text-black line-clamp-3">
            {note.body}
          </p>
        </div>
        <div className="flex items-center mt-5 text-xs gap-x-4">
          <p className="text-gray-500">{formattedDistance}</p>
        </div>
      </div>

      <Transition.Root show={open} as={React.Fragment}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                onClick={() => setOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative w-full max-h-full mx-auto overflow-hidden bg-[#FFE6C7] rounded-lg shadow-xl sm:w-1/2 md:w-full lg:w-1/2 sm:mx-0">
                <div className="px-4 pt-5 pb-4 bg-[#FFE6C7] sm:p-6 sm:pb-4">
                  <div className="">
                    <div className="flex items-center justify-center mb-14">
                      <img
                        className="w-auto h-20 "
                        src={logo}
                        alt="Note Master"
                      />
                      <div className="mt-2 font-bold tracking-widest text-center text-transparent text-xl bg-gradient-to-r from-[#454545] via-[#FF6000] to-[#FFA559] bg-clip-text">
                        Note Master
                      </div>
                    </div>
                    <div className="mt-10 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h2 className="mb-10 text-lg font-semibold leading-6 text-gray-900 ">
                        {note.title}
                      </h2>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{note.body}</p>
                      </div>
                      <div className="absolute mt-11 ">
                        <p className="text-sm text-white">
                          {formattedDistance}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-[#454545] sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-5 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                      handleClick();
                      setOpen(false);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-5 py-2 mt-3 text-sm font-semibold text-white bg-[#FFA559] rounded-md shadow-sm ring-1 ring-inset ring-[#FFA559] hover:bg-[#FFE6C7] sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-5 py-2 mt-3 mr-5 text-sm font-semibold text-white bg-[#FF6000] rounded-md shadow-sm ring-1 ring-inset ring-[#FF6000] hover:bg-[#FFA559] sm:mt-0 sm:w-auto"
                    onClick={() => setUpdateOpen(true)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Transition.Child>
      </Transition.Root>

      <Transition.Root show={updateOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setUpdateOpen}>
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
                          onClick={() => setUpdateOpen(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="w-6 h-6" aria-hidden="true" />
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
                        <UpdateNote
                          note={note}
                          key={note._id}
                          open={updateOpen}
                          setOpen={setUpdateOpen}
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
    </>
  );
};

export default NoteCard;
