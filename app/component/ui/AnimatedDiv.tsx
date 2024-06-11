import { useEffect, useRef, useState, FC, ReactNode } from "react";
import { useInView } from "framer-motion";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { animationVariants } from "./AnimationList";

export function useAnimateOnView() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isInView]);

  return { ref, animate };
}

type AnimationType = keyof typeof animationVariants;

interface AnimatedDivProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  animationType?: AnimationType;
}

const AnimatedDiv: FC<AnimatedDivProps> = ({
  children,
  animationType = "fadeIn",
}) => {
  const { ref, animate } = useAnimateOnView();
  const selectedVariant = animationVariants[animationType];

  return (
    <div ref={ref}>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          exit="hidden"
          variants={selectedVariant.container}
        >
          <motion.div variants={selectedVariant.child}>{children}</motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedDiv;
