import React from "react";
import { useNavigate } from "react-router-dom";

const CreateNewNote = ({ open, setOpen, handleCancel }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-1 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
        Create a new Note
      </h2>
      <form className="space-y-6" action="#" method="POST">
        <div className="mt-6">
          <label className="block text-sm font-medium leading-6 text-black">
            Title :
          </label>
          <div className="mt-2">
            <input
              id="title"
              name="title"
              type="text"
              autoComplete="text"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#454545] sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium leading-6 text-black">
            Description :
          </label>
          <div className="mt-2">
            <textarea
              id="description"
              name="description"
              type="text"
              autoComplete="text"
              required
              style={{ height: '180px' }}
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#454545] sm:text-sm sm:leading-6"
            />
          </div>
        </div>
       

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#FF6000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FFA559] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Note
          </button>
        </div>
        <div>
          <button
            type="reset"
            onClick={() => {
                handleCancel();
              }}
            className="flex w-full justify-center rounded-md bg-[#454545] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#807f7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewNote;
