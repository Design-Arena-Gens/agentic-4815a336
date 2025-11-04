"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const floatingCircle = {
  initial: { y: 0 },
  animate: { y: [-6, 6, -6] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
};

export const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-leaf-vein py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-caterpillar-sky via-white/50 to-caterpillar-yellow/40" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-12 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-balance"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-caterpillar-bark shadow-sm">
            <span className="h-2 w-2 rounded-full bg-caterpillar-green" />
            Metamorphosis Explorer
          </span>
          <h1 className="font-display text-4xl leading-tight text-caterpillar-bark md:text-6xl">
            Witness the quiet genius of a caterpillar becoming flight.
          </h1>
          <p className="max-w-xl text-lg text-caterpillar-night/80 md:text-xl">
            Journey through the lifecycle, habits, and microscopic marvels that
            power one of nature&apos;s most dramatic transformations.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#timeline"
              className="rounded-full bg-caterpillar-green px-6 py-3 font-semibold text-white shadow-lg shadow-caterpillar-green/40 transition hover:bg-caterpillar-leaf"
            >
              Explore the stages
            </Link>
            <Link
              href="#daily-ritual"
              className="rounded-full border border-caterpillar-bark/30 px-6 py-3 font-semibold text-caterpillar-bark transition hover:border-caterpillar-bark hover:text-caterpillar-bark"
            >
              See a day in the life
            </Link>
          </div>
        </motion.div>

        <div className="relative flex-1">
          <motion.div
            {...floatingCircle}
            className="absolute -left-6 top-8 hidden h-28 w-28 rounded-full bg-caterpillar-yellow/80 blur-xl sm:block"
          />
          <motion.div
            {...floatingCircle}
            transition={{ ...floatingCircle.transition, duration: 7 }}
            className="absolute -right-4 bottom-12 hidden h-32 w-32 rounded-full bg-caterpillar-green/70 blur-2xl sm:block"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur"
          >
            <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center">
              <div className="relative">
                <motion.div
                  initial={{ rotate: -8, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-caterpillar-green via-caterpillar-leaf to-caterpillar-yellow shadow-inner"
                >
                  <span className="absolute inset-0 rounded-full border border-white/40" />
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, delay: 0.4 }}
                    viewBox="0 0 260 90"
                    className="h-24 w-28 text-white"
                  >
                    <path
                      d="M20 60 C40 20, 80 20, 100 60 S140 100, 160 60 200 20, 220 60"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </motion.svg>
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-caterpillar-night px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 shadow"
                >
                  Larval Motion
                </motion.span>
              </div>
              <p className="text-sm text-caterpillar-night/70">
                Caterpillars have more than 4,000 muscles, giving them the agility
                to navigate leaves that sway, bend, and twist.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
