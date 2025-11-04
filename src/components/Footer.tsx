"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="border-t border-caterpillar-bark/10 bg-white py-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-caterpillar-bark/70 md:flex-row md:px-12 md:text-left"
      >
        <p>
          Crafted to celebrate the subtle science of metamorphosis. Share it with
          fellow leaf-watchers.
        </p>
        <p className="font-medium text-caterpillar-bark/80">
          Caterpillar Studio · {new Date().getFullYear()}
        </p>
      </motion.div>
    </footer>
  );
};
