"use client";

import { motion } from "framer-motion";
import { dailyRhythm } from "@/data/lifecycle";

const animation = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 }
};

export const DailyRhythm = () => {
  return (
    <section
      id="daily-ritual"
      className="relative overflow-hidden bg-gradient-to-br from-caterpillar-green/20 via-caterpillar-sky/70 to-white py-24"
    >
      <div className="absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-caterpillar-green/10 blur-3xl" />
      <div className="mx-auto flex max-w-5xl flex-col-reverse gap-12 px-6 md:flex-row md:px-12">
        <motion.div
          {...animation}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h2 className="font-display text-3xl text-caterpillar-bark md:text-4xl">
            A day spent in stillness, woven with vibrant purpose
          </h2>
          <p className="mt-4 max-w-xl text-base text-caterpillar-night/80 md:text-lg">
            Caterpillars choreograph their day around temperature, sunlight, and
            the chemistry of their host plants. Glide through their rhythm to
            see how growth hides in the quiet moments.
          </p>
          <dl className="mt-8 space-y-6">
            {dailyRhythm.map((item, index) => (
              <div
                key={item.time}
                className="grid gap-3 rounded-2xl bg-white/80 p-5 shadow-md shadow-caterpillar-green/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
              >
                <dt className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-caterpillar-bark/60">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-caterpillar-green/20 font-display text-base text-caterpillar-bark">
                    {index + 1}
                  </span>
                  {item.time}
                </dt>
                <dd>
                  <p className="text-lg font-semibold text-caterpillar-bark">
                    {item.activity}
                  </p>
                  <p className="text-sm text-caterpillar-night/80">
                    {item.detail}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          {...animation}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="flex-1"
        >
          <div className="relative isolate h-full overflow-hidden rounded-3xl bg-caterpillar-night/90 text-white shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6BAA5B33,transparent_55%)]" />
            <div className="relative flex h-full flex-col gap-8 p-10">
              <header>
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Micro Lab
                </p>
                <h3 className="mt-2 font-display text-2xl">
                  Leaf Chemistry Monitor
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  Caterpillars triangulate the best feeding spots by tasting
                  chemical signatures through tiny sensory hairs.
                </p>
              </header>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                    Preferred pigment
                  </p>
                  <p className="mt-2 flex items-baseline gap-2 font-display text-3xl text-caterpillar-yellow">
                    Carotenoids
                    <span className="text-xs font-medium text-white/50">
                      (growth signal)
                    </span>
                  </p>
                  <p className="mt-2 text-xs text-white/60">
                    Boosts immune defenses while deepening the green camouflage.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Moisture", value: "72%" },
                    { label: "Leaf sugars", value: "18%" },
                    { label: "Tannin load", value: "Low" }
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                    >
                      <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/50">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-display text-xl text-white">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                    Survival insight
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    When moisture dips below 50%, caterpillars stop feeding to
                    avoid ingesting leaf toxins that concentrate in dry heat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
