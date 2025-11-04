"use client";

import { motion } from "framer-motion";

const habitats = [
  {
    title: "Milkweed Canopies",
    description:
      "Home to monarch caterpillars. Leaves brim with cardiac glycosides, making the caterpillar unappealing to predators.",
    tag: "Monarch"
  },
  {
    title: "Oak Leaf Galleries",
    description:
      "Silkworms carve small windows into oak leaves, regulating light and temperature around their silk retreats.",
    tag: "Silkworm"
  },
  {
    title: "Stinging Nettle Shades",
    description:
      "Tortoiseshell caterpillars cluster here. Tiny hairs neutralize nettle toxins before they reach vital organs.",
    tag: "Tortoiseshell"
  }
];

export const HabitatShowcase = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-12">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-caterpillar-bark/60">
            Global habitats
          </span>
          <h2 className="font-display text-3xl text-caterpillar-bark md:text-4xl">
            Host plants carve the blueprint of every color, stripe, and speed.
          </h2>
          <p className="text-base text-caterpillar-night/80 md:text-lg">
            Caterpillars code-switch with their environment. Different leaves
            supply distinct pigments and defensive molecules that cross the
            metamorphic bridge into adulthood.
          </p>
          <div className="rounded-3xl border border-caterpillar-bark/10 bg-white/70 p-6 shadow-xl shadow-caterpillar-green/10 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-caterpillar-bark/70">
              Adaptive pigment formula
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { label: "Chlorophyll", value: "Camouflage" },
                { label: "Carotenoids", value: "Warning hues" },
                { label: "Flavonoids", value: "UV armor" }
              ].map((molecule) => (
                <div
                  key={molecule.label}
                  className="rounded-2xl bg-caterpillar-sky/60 p-4 text-center text-sm text-caterpillar-bark"
                >
                  <p className="font-semibold">{molecule.label}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-caterpillar-bark/60">
                    {molecule.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {habitats.map((habitat, index) => (
            <motion.article
              key={habitat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-caterpillar-bark/10 bg-gradient-to-br from-white to-caterpillar-sky/40 p-6 shadow-lg shadow-caterpillar-green/10 backdrop-blur"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-caterpillar-green/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-caterpillar-leaf">
                {habitat.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl text-caterpillar-bark">
                {habitat.title}
              </h3>
              <p className="mt-3 text-sm text-caterpillar-night/80">
                {habitat.description}
              </p>
              <div className="mt-4 h-24 rounded-2xl bg-gradient-to-r from-caterpillar-green/20 via-transparent to-caterpillar-yellow/20" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
