type Variant {
    hidden: {
        opacity?: number,
        x?: number,
        y?: number,
        scale?: number,
        rotate?: number,
    } ,
    visible: {
        opacity?: number,
        x?: number,
        y?: number,
        scale?: number,
        rotate?: number,
        transition?: {
            type?: string,
            stiffness?: number,
            repeat?: number,
            repeatType?: string,
            duration?: number,
            delay?: number,
        }
    }
}