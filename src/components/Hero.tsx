import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Scene from "./particles/scene";

interface HeroProps {
  t: {
    available: string;
    role: string;
    titleMain: string;
    titleHighlight: string;
    desc: string;
    exp: string;
    projects: string;
    commitment: string;
  };
}

const Hero = ({ t }: HeroProps) => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <Scene />
      <div className="absolute xs:top-10 top-32 w-full flex flex-col gap-8 justify-center items-center">
        <motion.div
          variants={fadeIn("down", "spring", 0.3, 0.75)}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center items-center gap-4 text-center px-4"
        >
          <div className="flex flex-col gap-2 items-center">
            <div className="px-4 py-1.5 rounded-full border border-violet-500/50 bg-violet-500/10 text-violet-300 text-sm font-medium mb-4">
              {t.available}
            </div>
            <p className="text-[#dfd9ff] font-medium lg:text-xl sm:text-lg xs:text-base text-base">
              {t.role}
            </p>
            <h1 className="font-black text-white lg:text-[72px] sm:text-[56px] xs:text-[45px] text-[36px] lg:leading-[1.1] mt-2">
              {t.titleMain.split(" ")[0]}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                {t.titleHighlight}
              </span>{" "}
              <br />
              {t.titleMain.split(" ").slice(1).join(" ")}
            </h1>
          </div>

          <p className="text-[#dfd9ff] font-normal lg:text-[20px] sm:text-[18px] xs:text-[16px] text-[14px] lg:leading-[32px] max-w-2xl mt-4">
            {t.desc.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br className="hidden sm:block" />
              </span>
            ))}
          </p>

          <div className="flex flex-row gap-4 mt-8">
            <div className="flex flex-col items-center">
              <span className="font-bold text-white text-2xl">5+</span>
              <span className="text-secondary text-sm">{t.exp}</span>
            </div>
            <div className="w-[1px] h-full bg-secondary/30"></div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-white text-2xl">20+</span>
              <span className="text-secondary text-sm">{t.projects}</span>
            </div>
            <div className="w-[1px] h-full bg-secondary/30"></div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-white text-2xl">100%</span>
              <span className="text-secondary text-sm">{t.commitment}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#tech">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary/30 flex justify-center items-start p-2 hover:border-violet-500 transition-colors">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-violet-500 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
