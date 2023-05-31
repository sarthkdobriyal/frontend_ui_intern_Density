import { Variants } from "framer-motion"

export  const heading: Variants = {
    hidden : {
        x:-110,
        opacity: 0,
    },
    visible : {
        x: 0,
        opacity:1,
        transition: {
            type: "spring",
            stiffness: 500,
        }
    }
}

export const para: Variants ={
    hidden : {
        x: 221,
        opacity: 0,
    },

    visible : {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 500,
            duration: 1,
            delaty: 1
        }
    }
}

export const fade: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } }
}