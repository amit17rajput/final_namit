import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FaqItem } from "../data/faq";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-edge/15 border-t border-b border-edge/15">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `faq-panel-${item.question.slice(0, 10).replace(/\s/g, "-")}-${i}`;
        return (
          <div key={item.question}>
            <button
              type="button"
              data-cursor-hover
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-base text-fog md:text-lg">{item.question}</span>
              <motion.span animate={{ rotate: open ? 180 : 0 }} className="flex-shrink-0">
                <ChevronDown className="h-5 w-5 text-cyan" aria-hidden="true" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-10 text-sm text-muted">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
