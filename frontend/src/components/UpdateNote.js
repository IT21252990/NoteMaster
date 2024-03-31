import React, { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import Swal from "sweetalert2";

const UpdateNote = ({ note, handleCancel }) => {
  const [updatedTitle, setUpdatedTitle] = useState(note.title);
  const [updatedBody, setUpdatedBody] = useState(note.body);
  const [error, setError] = useState(null);

  const { dispatch } = useNotesContext();
  const { user } = useAuthContext();

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const updatedNote = { ...note, title: updatedTitle, body: updatedBody };

    const response = await fetch("/api/notes/" + note._id, {
      method: "PATCH",
      body: JSON.stringify(updatedNote),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError("Failed to update note");
      return;
    }

    if (response.ok) {
      dispatch({ type: "UPDATE_NOTE", payload: json });
      handleCancel();
      // Display success message using SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Note updated successfully",
        confirmButtonColor: "#FF6000",
      });
    }

    window.location.reload();
  };

  return (
    <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-1 text-4xl font-bold leading-9 tracking-tight text-center text-gray-900">
        Edit a Note
      </h2>
      <form className="space-y-6" onSubmit={handleUpdate}>
        <div className="mt-6">
          <label className="block text-sm font-medium leading-6 text-black">
            Title :
          </label>
          <div className="mt-2">
            <input
              id="title"
              name="title"
              type="text"
              onChange={(e) => setUpdatedTitle(e.target.value)}
              value={updatedTitle}
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
              onChange={(e) => setUpdatedBody(e.target.value)}
              value={updatedBody}
              autoComplete="text"
              required
              style={{ height: "180px" }}
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#454545] sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button className="flex w-full justify-center rounded-md bg-[#FF6000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FFA559] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save Updates
          </button>
          {error && <div className="font-semibold text-red-600">{error}</div>}
        </div>
        <div>
          <button
            type="button"
            onClick={handleCancel}
            className="flex w-full justify-center rounded-md bg-[#454545] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#807f7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateNote;
