import { motion } from "framer-motion";

type PropsType = {
  line1: string;
  line2?: string;
  line3?: string;
  classText: string
};

const AnimatedTextWord = ({ line1, line2, line3, classText }: PropsType) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.h1
      className={`${classText} font-bold font-inter tracking-widest`}
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {line1.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={letter}>
          {char}
        </motion.span>
      ))}
      <br />
      {line2 && line2.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={letter}>
          {char}
        </motion.span>
      ))}
      <br />
      {line3 && line3.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedTextWord;