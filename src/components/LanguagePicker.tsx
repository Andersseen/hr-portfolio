import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useRef } from "react";

interface LanguagePickerProps {
  currentLang: string;
  languages: Record<string, string>;
  url: string;
}

export default function LanguagePicker({
  currentLang,
  languages,
  url,
}: LanguagePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Only apply magnetic effect when close (e.g., within 100px)
    // But since this listener is likely on the element itself or a wrapper,
    // we can just map the distance directly for a subtle effect.
    x.set(distanceX * 0.6); // Adjust multiplier for strength
    y.set(distanceY * 0.6);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Sort languages: current first, then others
  const sortedLangs = [
    [currentLang, languages[currentLang]],
    ...Object.entries(languages).filter(([key]) => key !== currentLang),
  ];

  const handleSelect = (langCode: string) => {
    // Construct new path
    // Assumes url is like /en/ or /es/something
    // This is a simplified path replacement for client-side
    // Ideally we pass a helper or use simple string manipulation
    const parts = window.location.pathname.split("/");
    // parts[0] is empty, parts[1] is lang
    if (parts[1] in languages) {
      parts[1] = langCode;
    } else {
      // if no lang prefix, add it (edge case, usually handled by middleware/astro)
      parts.splice(1, 0, langCode);
    }
    window.location.href = parts.join("/");
  };

  return (
    <div className="fixed top-2 right-2 z-50">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: mouseX, y: mouseY }}
        className="relative p-8 flex items-center justify-center"
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer bg-black/20 backdrop-blur-lg border border-white/10 rounded-full text-xs font-bold text-white shadow-lg overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-violet-500/50"
          style={{
            width: isOpen ? "auto" : "40px",
            height: isOpen ? "auto" : "40px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col p-1.5 gap-1"
              >
                {sortedLangs.map(([code]) => (
                  <button
                    key={code}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(code);
                      setIsOpen(false);
                    }}
                    className={`px-3 py-2 rounded-full transition-colors ${
                      code === currentLang
                        ? "bg-violet-500 text-white"
                        : "text-neutral-300 hover:bg-white/10"
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="w-full h-full flex items-center justify-center p-2"
              >
                {currentLang.toUpperCase()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
