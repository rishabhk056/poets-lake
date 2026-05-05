import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate(`/artist/${artist.id}`)}
      className="cursor-pointer group"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg overflow-hidden transition duration-300 hover:shadow-yellow-400/30">
        
        {/* Image */}
        <div className="w-full h-40 overflow-hidden">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-bold text-yellow-400">
            {artist.name}
          </h2>
          <p className="text-gray-300 text-sm">
            {artist.era}
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default ArtistCard;