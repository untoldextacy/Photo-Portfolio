import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gray-800 py-10 mt-12">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p className="text-gray-400 mb-3">Follow me on social media:</p>
          <div className="flex justify-center gap-5">
            <a href="https://github.com/untoldextacy" className="text-gray-400 hover:text-white transition">GitHub</a>
            <a href="https://www.untoldextacyphotos.com" className="text-gray-400 hover:text-white transition">Adobe Portfolio</a>
            <a href="https://instagram.com/untoldextacy" className="text-gray-400 hover:text-white transition">Instagram</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
