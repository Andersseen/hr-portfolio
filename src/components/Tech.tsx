import { motion } from "framer-motion";
import { BallCanvas } from "./canvas/Ball";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <motion.section
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      initial="hidden"
      animate="show"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Technologies
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div 
            className="w-28 h-28 flex items-center justify-center" 
            key={technology.name}
            title={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Tech;