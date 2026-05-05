import { useParams } from "react-router-dom";
import { artists } from "../utils/mockData";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ArtistDetail = () => {
  const { id } = useParams();
  const artistId = Number(id);
  const artist = artists.find((a) => a.id === artistId);

  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Load notes
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem(`notes-${artistId}`)) || [];
    setNotes(saved);
  }, [artistId]);

  // Save notes
  useEffect(() => {
    localStorage.setItem(`notes-${artistId}`, JSON.stringify(notes));
  }, [notes, artistId]);

  if (!artist) {
    return <div className="p-8">Artist not found</div>;
  }

  const handleAdd = () => {
    if (!input.trim()) return;

    if (editingIndex !== null) {
      const updated = [...notes];
      updated[editingIndex] = input;
      setNotes(updated);
      setEditingIndex(null);
    } else {
      setNotes([...notes, input]);
    }

    setInput("");
  };

  const handleEdit = (index) => {
    setInput(notes[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  return (
    <div className="bg-[#f5f1e8] min-h-screen text-black">

      {/* 🎬 HERO */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-10 left-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading text-white"
          >
            {artist.name}
          </motion.h1>

          <p className="text-gray-200 mt-2">
            {artist.era}
          </p>
        </div>
      </div>

      {/* 🧾 CONTENT */}
      <div className="max-w-5xl mx-auto p-8">

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-heading mb-4">
            About the Artist
          </h2>

          <p className="text-gray-700 font-body leading-relaxed">
            This is where biography will go. Later we’ll connect real data from backend.
          </p>
        </motion.div>

        {/* Notes */}
        <div>
          <h2 className="text-3xl font-heading mb-6">
            Your Notes 📝
          </h2>

          {/* Input */}
          <div className="flex gap-3 mb-8">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a thought..."
              className="flex-1 p-3 rounded-md border border-gray-300 outline-none"
            />
            <button
              onClick={handleAdd}
              className="px-5 py-2 bg-black text-white rounded-md"
            >
              {editingIndex !== null ? "Update" : "Add"}
            </button>
          </div>

          {/* Notes List */}
          <div className="space-y-4">
            {notes.map((note, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md p-4 flex justify-between items-center"
              >
                <p>{note}</p>

                <div className="flex gap-4 text-sm">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-gray-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ArtistDetail;