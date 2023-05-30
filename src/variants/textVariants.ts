export  const heading = {
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

export const para ={
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