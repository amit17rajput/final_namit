import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  reduced?: boolean;
}

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.035, delayChildren: delay },
  }),
};

const char = {
  hidden: { y: "110%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

export default function RevealText({
  text,
  as = "h2",
  className = "",
  delay = 0,
  reduced = false,
}: RevealTextProps) {
  const Tag = motion[as];
  const words = text.split(" ");

  if (reduced) {
    const Static = as;
    return <Static className={className}>{text}</Static>;
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={container}
      custom={delay}
      style={{ overflow: "hidden" }}
    >
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.28em" }}>
          {word.split("").map((c, ci) => (
            <motion.span
              key={ci}
              variants={char}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "inline-block" }}
            >
              {c}
            </motion.span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
