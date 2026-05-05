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
const [loaded, setLoaded] = useState(false); 

  // Load notes for this artist
  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem(`notes-${artistId}`)) || [];
  setNotes(saved);
  setLoaded(true); // 👈 mark loaded
}, [artistId]);

  // Save notes
  useEffect(() => {
  if (!loaded) return; // 👈 prevent early overwrite

  localStorage.setItem(`notes-${artistId}`, JSON.stringify(notes));
}, [notes, artistId, loaded]);

  if (!artist) {
    return <div className="p-8 text-white">Artist not found</div>;
  }

  // Add / Update note
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
    <div className="text-white">

      {/* HERO */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover scale-105 blur-sm"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute bottom-10 left-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading text-yellow-400 tracking-wide"
          >
            {artist.name}
          </motion.h1>

          <p className="text-gray-300 font-body leading-relaxed">
            {artist.era}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto p-8">

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg mb-8"
        >
          <h2 className="text-2xl font-heading text-yellow-400 tracking-wide">
            About the Artist
          </h2>

          <p className="text-gray-300 font-body leading-relaxed">
            This is where biography will go. Later we’ll connect real data from backend.
          </p>
        </motion.div>

        {/* NOTES */}
        <div>
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Your Notes 📝
          </h2>

          {/* Input */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a thought..."
              className="flex-1 p-3 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
            />
            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-yellow-400 text-black rounded-xl font-semibold"
            >
              {editingIndex !== null ? "Update" : "Add"}
            </button>
          </div>

          {/* Notes */}
          <div className="grid md:grid-cols-2 gap-4">
            {notes.map((note, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex justify-between items-start"
              >
                <p className="text-gray-300 font-body leading-relaxed">{note}</p>

                <div className="flex gap-2 text-sm">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-yellow-400 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-400 hover:underline"
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