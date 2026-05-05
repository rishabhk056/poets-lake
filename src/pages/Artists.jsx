import { artists } from "../utils/mockData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Artists = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f5f1e8] min-h-screen text-black">

      <motion.div
        className="max-w-7xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* Heading */}
        <p className="text-gray-600 mb-8 font-body">
  Discover artists and explore their timeless creations.
</p>
        <h1 className="text-4xl font-heading tracking-tight mb-10">
          Explore Artists
        </h1>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">

          {artists.map((artist) => (
            <div
              key={artist.id}
              onClick={() => navigate(`/artist/${artist.id}`)}
              className="group cursor-pointer transition duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-lg">

                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110 brightness-95"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-sm tracking-wider">
                    View Artist →
                  </span>
                </div>

              </div>

              <h2 className="mt-4 font-heading text-lg">
                {artist.name}
              </h2>

              <p className="text-sm text-gray-600">
                {artist.era}
              </p>
            </div>
          ))}

        </div>

      </motion.div>

    </div>
  );
};

export default Artists;