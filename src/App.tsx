import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "./components/Cursor";
import ScrollProgressBar from "./components/ScrollProgressBar";
import RootLayout from "./layouts/RootLayout";
import { MotionPrefsContext } from "./hooks/useMotionPrefs";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { useDeviceCapability } from "./hooks/useDeviceCapability";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ServicesOverview = lazy(() => import("./pages/ServicesOverview"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Technologies = lazy(() => import("./pages/Technologies"));
const Industries = lazy(() => import("./pages/Industries"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Process = lazy(() => import("./pages/Process"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));
const Contact = lazy(() => import("./pages/Contact"));
const Faq = lazy(() => import("./pages/Faq"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const reduced = useReducedMotion();
  const { isTouch, hasWebGL, isLowPower } = useDeviceCapability();
  const [intro, setIntro] = useState(true);

  useSmoothScroll(!reduced);

  useEffect(() => {
    const t = setTimeout(() => setIntro(false), reduced ? 0 : 1000);
    return () => clearTimeout(t);
  }, [reduced]);

  const prefs = useMemo(
    () => ({
      reduced,
      interactive: !reduced && !isTouch,
      showScene: hasWebGL && !reduced,
      lowPower: isLowPower,
    }),
    [reduced, isTouch, hasWebGL, isLowPower]
  );

  return (
    <MotionPrefsContext.Provider value={prefs}>
      <div className="relative bg-space">
        <AnimatePresence>
          {intro && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-space"
            >
              <motion.span
                initial={{ letterSpacing: "0.6em", opacity: 0 }}
                animate={{ letterSpacing: "0.3em", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-sm uppercase text-cyan"
              >
                Namitron
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        <Cursor enabled={prefs.interactive} />
        <ScrollProgressBar />

        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route element={<RootLayout reduced={reduced} />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<ServicesOverview />} />
                <Route path="services/:slug" element={<ServiceDetail />} />
                <Route path="technologies" element={<Technologies />} />
                <Route path="industries" element={<Industries />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="portfolio/:slug" element={<CaseStudyDetail />} />
                <Route path="process" element={<Process />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogArticlePage />} />
                <Route path="contact" element={<Contact />} />
                <Route path="faq" element={<Faq />} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </MotionPrefsContext.Provider>
  );
}
