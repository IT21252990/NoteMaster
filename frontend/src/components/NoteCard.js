import React from "react";
import { useNotesContext } from "../hooks/useNotesContext";

const NoteCard = ({note}) => {

    const { dispatch } = useNotesContext();

  return (
    <div>
      <article
        className="flex max-w-xl flex-col items-start justify-between shadow-lg rounded-lg"
      >
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={note.createdAt} className="text-gray-500">
            {note.createdAt}
          </time>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              {note.title}
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {note.body}
          </p>
        </div>
      </article>
    </div>
  );
};

export default NoteCard;
