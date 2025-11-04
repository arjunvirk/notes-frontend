import { PenSquareIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import axios from "axios";
import toast from "react-hot-toast";

const API = import.meta.env.VITE_API_URL;

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await axios.delete(`${API}/api/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // to remove the deleted note from the UI
      toast.success("Note deleted successfully!");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="p-4 border text-white border-solid border-green-500 bg-black rounded-md"
    >
      <div>
        <h3 className="font-semibold my-1">{note.title}</h3>
        <p className="text-sm">{note.content}</p>
        <div className="flex justify-between items-center mt-4">
          <span>{formatDate(note.createdAt)}</span>
          <div className="flex items-center gap-1">
            <button className="cursor-pointer hover:bg-gray-400/25 rounded p-1">
              <PenSquareIcon className="size-4" />
            </button>
            <button
              className="text-red-500 cursor-pointer hover:bg-gray-400/25 rounded p-1"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
