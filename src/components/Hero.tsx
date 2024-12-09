import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Scene from "./particles/scene";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <Scene />
      <div className="absolute xs:top-10 top-32 w-full flex flex-col gap-8 justify-center items-center">
        <motion.div
          variants={fadeIn("down", "spring", 0.3, 0.75)}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center items-start gap-4"
        >
          <div className="flex flex-col gap-2">
            <p className="text-[#dfd9ff] font-medium lg:text-xl sm:text-lg xs:text-base text-base">
              Hello, I'm
            </p>
            <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
              John Doe
            </h1>
          </div>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            Full Stack Developer & <br className="sm:block hidden" />
            UI/UX Designer
          </p>
        </motion.div>

        <motion.p
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          initial="hidden"
          animate="show"
          className="text-secondary text-lg max-w-3xl"
        >
          I craft digital experiences that merge creativity with functionality,
          specializing in modern web technologies and user-centric design.
        </motion.p>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
