import axios from "axios";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`${API}/api/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  // console.log({ note });

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await axios.delete(`${API}/api/notes/${id}`);
      toast.success("Note deleted successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);
    try {
      await axios.put(`${API}/api/notes/${id}`, note);
      toast.success("Note updated successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error updating the note", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-5 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-20">
            <Link
              to="/"
              className="text-white flex gap-2 rounded-md border border-white px-4 py-2"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button
              onClick={handleDelete}
              className="text-white flex gap-2 cursor-pointer border border-white px-4 py-2 rounded-md"
            >
              <Trash2Icon className="h-5 w-5 text-red-500" />
              Delete Note
            </button>
          </div>

          <div className="bg-black p-6 rounded-lg text-white">
            <div>
              <div className="mb-4">
                <label className="block">Title</label>
                <input
                  className="border border-green-500 w-full p-2 rounded-xl my-2"
                  type="text"
                  placeholder="Note Title"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block">Content</label>
              <textarea
                className="border border-green-500 w-full p-2 rounded-xl my-2 h-32"
                type="text"
                placeholder="Write your note here..."
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
              />
            </div>

            <button
              className="px-4 py-3 bg-green-600 text-black font-semibold rounded-full cursor-pointer"
              disabled={saving}
              onClick={handleSave}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
