import { Variant } from "framer-motion";

export const semicircle: Variant = {
    hidden: { y: -10, scale: 0, rotate: 270 },
     visible: {y: 0, scale: 1, rotate:-45, transition:{type: "spring", stiffness: 100, repeat: 2, repeatType: 'mirror', duration: 10}}
                     
}

const ghost: Variant = {
    hidden: { x: -100, y: -74, scale: 0.8, rotate: 180 },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: [180, 25, -40, 30, -10, 25],
      transition: { type: "spring", stiffness: 400, duration: 10 },
    },
  };
