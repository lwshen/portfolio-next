import type { ReactNode } from "react";

import { motion } from "framer-motion";

import { FADE_DOWN_ANIMATION_VARIANTS } from "~/utils/constants";

export default function Title(props: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.p
        className="jin-bu-ti pb-8 text-3xl font-bold"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        {props.children}
      </motion.p>
    </motion.div>
  );
}
