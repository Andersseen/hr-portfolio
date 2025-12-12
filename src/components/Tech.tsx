import { motion } from "framer-motion";
import { BallCanvas } from "./canvas/Ball";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <motion.section
      id="tech"
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="text-center mb-16">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My Expertise
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Technologies
        </h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]">
          I work with a diverse set of modern tools to build robust
          applications. My primary focus is on the JavaScript/TypeScript
          ecosystem for full-stack development.
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 flex flex-col items-center justify-center gap-2"
            key={technology.name}
            title={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-white/60 text-xs font-medium">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Tech;
