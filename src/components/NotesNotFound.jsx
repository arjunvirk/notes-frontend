import { NotebookIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="rounded-md p-8 bg-green-900/55">
        <NotebookIcon className="size-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white/65">No notes yet</h3>
      <p className="text-green-500 text-lg">
        Ready to organize your thoughts? Create your first note to get started
        on your journey.
      </p>
      <Link
        to="/create"
        className="text-black bg-green-500 px-4 py-2 rounded-md font-semibold 
             shadow-md hover:bg-green-600 hover:shadow-lg 
             active:scale-95 active:bg-green-700 
             transition-all duration-200 ease-in-out"
      >
        Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
