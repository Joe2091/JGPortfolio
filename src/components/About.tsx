import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto text-gray-600">Short intro about you...</p>
    </motion.section>
  );
}
