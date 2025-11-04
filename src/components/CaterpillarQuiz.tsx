"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const questions = [
  {
    prompt: "How many times can a caterpillar molt before becoming a chrysalis?",
    options: ["2-3 times", "4-5 times", "Over 10 times"],
    answer: "4-5 times",
    insight:
      "Most species molt four or five times, each called an instar. The patterning often shifts after each molt."
  },
  {
    prompt: "What powers the movement inside a chrysalis?",
    options: [
      "Wing muscles formed immediately",
      "Stored larval energy and stem cells",
      "External heat absorbed through the shell"
    ],
    answer: "Stored larval energy and stem cells",
    insight:
      "Imaginal discs built during the larval stage unfold and become adult structures using the caterpillar's energy reserves."
  },
  {
    prompt: "Why do caterpillars spin silk mats before pupating?",
    options: [
      "To camouflage their chrysalis",
      "To secure themselves against gravity",
      "To attract other caterpillars"
    ],
    answer: "To secure themselves against gravity",
    insight:
      "Silk anchors the chrysalis to the branch so it can swing safely while the transformation takes place."
  }
];

export const CaterpillarQuiz = () => {
  const shuffled = useMemo(() => questions, []);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const current = shuffled[index];
  const isCorrect = selected && selected === current.answer;

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);
  };

  const handleNext = () => {
    setSelected(null);
    setIndex((prev) => (prev + 1) % shuffled.length);
  };

  return (
    <section className="bg-caterpillar-night py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-white/40">
            Rapid insight check
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Your instincts vs. the caterpillar&apos;s playbook
          </h2>
          <p className="mt-3 text-base text-white/70">
            Test what you&apos;ve learned about metamorphosis. Each answer unlocks
            a micro insight straight from the leaf line.
          </p>
        </div>
        <motion.div
          key={current.prompt}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl shadow-caterpillar-green/10 backdrop-blur"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Question {index + 1} of {shuffled.length}
          </p>
          <h3 className="mt-4 font-display text-2xl text-caterpillar-yellow">
            {current.prompt}
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {current.options.map((option) => {
              const isActive = selected === option;
              const status =
                selected && option === current.answer
                  ? "bg-caterpillar-green/30 border-caterpillar-green text-white"
                  : isActive
                    ? "bg-red-500/20 border-red-500"
                    : "border-white/10 bg-white/5 text-white/80";
              return (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`rounded-2xl border p-4 text-left text-sm font-medium transition hover:border-caterpillar-yellow/60 hover:bg-caterpillar-yellow/10 ${status}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/80"
            >
              <p>
                {isCorrect ? "Correct!" : "Not quite."} {current.insight}
              </p>
              <button
                onClick={handleNext}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-caterpillar-green px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-caterpillar-green/30 transition hover:bg-caterpillar-leaf"
              >
                Next insight
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
