import axios from "axios";
import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(title, content);
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${API}/api/notes`, {
        title,
        content,
      });
      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! Tou're creating notes too fast", {
          duration: 4000,
          icon: "💀☠",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link
            to={"/"}
            className="mb-6 text-white flex gap-2 px-4 py-2 border border-white rounded-xl justify-center"
          >
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="bg-black border border-green-500 p-8 rounded-xl mt-25">
            <div className="text-white">
              <h2 className="text-2xl mb-4">Create a new note</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block">Title</label>
                  <input
                    className="border border-green-500 w-full p-2 rounded-xl my-2"
                    type="text"
                    placeholder="Note Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="block">Content</label>
                  <textarea
                    className="border border-green-500 w-full p-2 rounded-xl my-2 h-32"
                    type="text"
                    placeholder="Write your note here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-end">
                  <button
                    className="px-4 py-3 bg-green-600 text-black font-semibold rounded-full cursor-pointer"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
