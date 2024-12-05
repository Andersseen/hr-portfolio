import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-12"
      >
        <div>
          <h2 className="text-4xl font-bold text-center text-white">About Me</h2>
          <div className="w-full h-1 bg-secondary/20 mt-4 relative">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-secondary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            <p className="text-secondary text-lg">
              I'm a passionate developer with a keen eye for design and a drive for
              creating seamless user experiences. With years of experience in both
              front-end and back-end development, I bring ideas to life through
              clean, efficient code and intuitive interfaces.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.5, 0.75)}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-semibold text-white">What I Do</h3>
            <p className="text-secondary text-lg">
              I specialize in building modern web applications using cutting-edge
              technologies. From responsive designs to complex web applications, I
              focus on creating solutions that are not only functional but also
              aesthetically pleasing and user-friendly.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;