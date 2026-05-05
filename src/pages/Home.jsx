import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { artists } from "../utils/mockData";
import { API_BASE_URL } from "../config/api";



const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white">

      {/* 🎬 HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070"
          alt="museum"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-4 font-body"
          >
            Digital Art Museum
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading text-white leading-tight"
          >
            Explore Art <br /> Like Never Before
          </motion.h1>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Explore Artists
          </motion.button>
        </div>
      </div>

      {/* 🧾 WELCOME SECTION */}
      <div className="bg-[#f5f1e8] text-black py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-heading leading-snug tracking-tight mb-6">
              Welcome To Poets Lake <br />
              Art & History Museum
            </h2>

            <p className="text-gray-700 font-body leading-relaxed mb-6">
              Poets Lake is a digital art space where creativity meets history.
              Explore timeless masterpieces, discover artistic movements,
              and capture your own thoughts through interactive notes.
            </p>

            <button className="uppercase tracking-wider text-sm border-b border-black pb-1 hover:opacity-70 transition">
              More About →
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800"
              alt="art sketch"
              className="rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>

      {/* 🖼 FEATURED ARTISTS SECTION */}
      <div className="bg-[#f5f1e8] text-black py-16">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* Heading */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-heading tracking-tight">
              Featured Artists
            </h2>

            <span className="text-sm uppercase tracking-wider cursor-pointer hover:opacity-70">
              View All →
            </span>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
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
                    className="w-full h-60 object-cover transition duration-500 group-hover:scale-110 brightness-95"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <span className="text-white text-sm tracking-wider">
                      View Artist →
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 font-heading text-lg">
                  {artist.name}
                </h3>

                <p className="text-sm text-gray-600">
                  {artist.era}
                </p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>

    </div>
  );
};

export default Home;