import { Variant } from "framer-motion"

export  const heading: Variant = {
    hidden : {
        x:-110,
        opcaity: 0,
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

export const para: Variant ={
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

export const fade: Variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } }
}