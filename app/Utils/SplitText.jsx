import { motion } from "framer-motion";

const SplitText = ({ text }) => {
  const words = text.split(" ");

  return (
    <span className="inline-block overflow-hidden">
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-2" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitText;
