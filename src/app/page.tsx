"use client";

import { CaterpillarQuiz } from "@/components/CaterpillarQuiz";
import { DailyRhythm } from "@/components/DailyRhythm";
import { Footer } from "@/components/Footer";
import { HabitatShowcase } from "@/components/HabitatShowcase";
import { HeroSection } from "@/components/HeroSection";
import { MetamorphosisTimeline } from "@/components/MetamorphosisTimeline";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <MetamorphosisTimeline />
      <DailyRhythm />
      <HabitatShowcase />
      <Insights />
      <CaterpillarQuiz />
      <Footer />
    </main>
  );
}

const insightCards = [
  {
    title: "Muscle Orchestra",
    description:
      "A caterpillar's body hosts around 4,000 muscles—six times more than a human—enabling micro-precise grip with each proleg."
  },
  {
    title: "Built-in Weather Radar",
    description:
      "Minute sensory hairs read barometric pressure so a caterpillar can shelter before rain reshapes its host leaf."
  },
  {
    title: "Metabolic Alchemy",
    description:
      "During metamorphosis, digestive enzymes pivot roles to dissolve larval tissues, fueling the architecture of wings."
  }
];

const Insights = () => (
  <section className="bg-gradient-to-b from-white to-caterpillar-sky/60 py-24">
    <div className="mx-auto max-w-6xl px-6 md:px-12">
      <div className="mb-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-caterpillar-bark/60"
        >
          Hidden mechanics
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-3 font-display text-3xl text-caterpillar-bark md:text-4xl"
        >
          Every wriggle hides engineering worthy of flight.
        </motion.h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {insightCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-3xl border border-caterpillar-bark/10 bg-white/80 p-6 text-left shadow-lg shadow-caterpillar-green/10 backdrop-blur"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-caterpillar-green/20 font-display text-lg text-caterpillar-bark">
              {index + 1}
            </div>
            <h3 className="mt-6 font-display text-xl text-caterpillar-bark">
              {card.title}
            </h3>
            <p className="mt-3 text-sm text-caterpillar-night/80">
              {card.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
