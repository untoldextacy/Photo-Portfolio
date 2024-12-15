import { motion } from 'framer-motion';

const GalleryPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="text-center px-4 sm:px-12 mb-10">
        <motion.h1
          className="text-6xl sm:text-8xl font-bold mb-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          My Portfolio
        </motion.h1>
        <motion.p
          className="text-lg sm:text-2xl font-light text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Explore my latest photography projects.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {/* Image 1 */}
        <motion.div
          className="h-64 flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <img
            src="/img/img1.jpg"
            alt="Image 1"
            className="h-full w-full object-cover rounded-lg"
          />
        </motion.div>
        {/* Image 2 */}
        <motion.div
          className="h-64 flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <img
            src="/img/img2.jpg"
            alt="Image 2"
            className="h-full w-full object-cover rounded-lg"
          />
        </motion.div>
        {/* Image 3 */}
        <motion.div
          className="h-64 flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <img
            src="/img/img3.jpg"
            alt="Image 3"
            className="h-full w-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPage;
