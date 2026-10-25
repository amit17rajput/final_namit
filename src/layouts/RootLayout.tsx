import { useOutlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

interface RootLayoutProps {
  reduced: boolean;
}

export default function RootLayout({ reduced }: RootLayoutProps) {
  const location = useLocation();
  const element = useOutlet();

  return (
    <div className="relative flex min-h-screen flex-col">
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={reduced ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex-1 pt-20"
        >
          {element}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
