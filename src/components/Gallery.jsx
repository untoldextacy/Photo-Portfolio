import { motion } from 'framer-motion';

function Gallery() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Gallery Item 1 */}
          <motion.div
            className="relative overflow-hidden rounded-lg transform transition-all hover:scale-105 hover:opacity-90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="../../public/img/img1.jpg" alt="Lady with Umbrella" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition">
              <p className="text-white font-semibold text-lg">Covering the Rays</p>
            </div>
          </motion.div>

          {/* Gallery Item 2 */}
          <motion.div
            className="relative overflow-hidden rounded-lg transform transition-all hover:scale-105 hover:opacity-90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="../../public/img/img2.jpg" alt="Steet Fighter 6 Juri Outfit 3 Cosplay" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition">
              <p className="text-white font-semibold text-lg">SF6 Juri Outfit 3</p>
            </div>
          </motion.div>

          {/* Gallery Item 3 */}
          <motion.div
            className="relative overflow-hidden rounded-lg transform transition-all hover:scale-105 hover:opacity-90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="../../public/img/img3.jpg" alt="New Vash Cosplay" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition">
              <p className="text-white font-semibold text-lg">Vash the Stampede</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
