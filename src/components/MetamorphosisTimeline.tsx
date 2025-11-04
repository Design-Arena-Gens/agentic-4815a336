"use client";

import { motion } from "framer-motion";
import { lifecycleStages } from "@/data/lifecycle";
import { useState } from "react";
import clsx from "clsx";

export const MetamorphosisTimeline = () => {
  const [activeStage, setActiveStage] = useState(lifecycleStages[1].id);

  return (
    <section
      id="timeline"
      className="mx-auto max-w-6xl px-6 py-24 md:px-12"
    >
      <div className="mb-12 flex flex-col gap-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-caterpillar-bark/60">
          Transformation Map
        </span>
        <h2 className="font-display text-3xl text-caterpillar-bark md:text-5xl">
          The caterpillar&apos;s four acts of metamorphosis
        </h2>
        <p className="mx-auto max-w-2xl text-base text-caterpillar-night/80 md:text-lg">
          Each stage is a deliberate chapter. Hover or tap to reveal the hidden
          choreography that reshapes a grounded crawler into an aerial storyteller.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1 space-y-4">
          {lifecycleStages.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <motion.button
                key={stage.id}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
                onClick={() => setActiveStage(stage.id)}
                className={clsx(
                  "group relative w-full overflow-hidden rounded-2xl border px-6 py-5 text-left transition",
                  isActive
                    ? "border-caterpillar-leaf/70 bg-white shadow-xl shadow-caterpillar-green/10"
                    : "border-transparent bg-white/60 backdrop-blur hover:border-caterpillar-bark/20"
                )}
              >
                <div
                  className={clsx(
                    "absolute inset-0 opacity-0 transition-opacity group-hover:opacity-20",
                    isActive && "opacity-20",
                    `bg-gradient-to-r ${stage.color}`
                  )}
                />
                <div className="relative flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white to-caterpillar-sky font-display text-xl text-caterpillar-bark shadow">
                    {stage.title.substring(0, 1)}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-caterpillar-bark/60">
                      {stage.subtitle}
                    </p>
                    <p className="text-lg font-semibold text-caterpillar-bark">
                      {stage.title}
                    </p>
                  </div>
                  <div className="ml-auto text-xs font-medium uppercase tracking-[0.25em] text-caterpillar-bark/50">
                    {stage.duration}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1 rounded-3xl border border-caterpillar-bark/10 bg-white/80 p-8 shadow-xl shadow-caterpillar-green/10 backdrop-blur"
        >
          {lifecycleStages
            .filter((stage) => stage.id === activeStage)
            .map((stage) => (
              <article key={stage.id}>
                <div className="relative mb-8">
                  <div
                    className={clsx(
                      "h-2 w-20 rounded-full bg-gradient-to-r",
                      stage.color
                    )}
                  />
                  <h3 className="mt-4 font-display text-3xl text-caterpillar-bark">
                    {stage.title}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-caterpillar-bark/60">
                    {stage.subtitle}
                  </p>
                </div>
                <p className="mb-6 text-base leading-relaxed text-caterpillar-night/80">
                  {stage.description}
                </p>
                <ul className="grid gap-4 md:grid-cols-2">
                  {stage.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 rounded-xl border border-caterpillar-bark/10 bg-caterpillar-sky/50 p-4 text-sm text-caterpillar-night/80"
                    >
                      <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-caterpillar-green" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
        </motion.div>
      </div>
    </section>
  );
};
