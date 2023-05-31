"use client";

import { FC } from "react";
import Image from "next/image";
import { Variant, motion } from "framer-motion";
import { heading } from "@variants/textVariants";
import { semicircle } from "@variants/imgVariant";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  const ghost: Variant = {
    initial: { x: -100, y: -74, scale: 0.8, rotate: 180 },
    animate: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: [180, 25, -40, 30, -10, 25],
      transition: { type: "spring", stiffness: 400, duration: 10 },
    },
  };

  return (
    <div className="w-screen flex items-center justify-center mt-10">
      <div className="flex bg-[#EFECFF] rounded-3xl w-[90%] h-[90vh] mb-5 overflow-hidden ">
        {/* left side */}
        <div className="relative flex-1 flex flex-col gap-2 items-start justify-center px-5 pl-16 w-[70%] overflow-hidden">
          <motion.span
            variants={heading}
            initial="hidden"
            animate="visible"
            className="font-baloo text-lg ml-2"
          >
            Ahead App
          </motion.span>
          <motion.span
            variants={heading}
            initial="hidden"
            animate="visible"
            className="font-baloo font-bold text-7xl"
          >
            Master your life <br /> by mastering <br /> emotions
          </motion.span>
          <div className="flex gap-5 items-center mt-8">
            <button className="px-3 py-1 rounded-lg bg-black text-white flex gap-1 items-center">
              <Image
                src="/apple_icon.png"
                alt="apple icon"
                height={40}
                width={40}
              />
              <div className="flex flex-col">
                <span className="text-xs font-light">Download on the</span>
                <span className="text-lg font-bold">App Store</span>
              </div>
            </button>
            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-1">
                {Array(5)
                  .fill(null)
                  .map(( star , i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0.5 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", delay:1 }}
                    >
                      <Image
                        src="/star.png"
                        alt="stars"
                        height={20}
                        width={20}
                      />
                    </motion.div>
                  ))}
              </div>
              <span className="text-slate-400 text-xs ">
                100+ App Store Reviews
              </span>
            </div>
          </div>

          <motion.div
            variants={semicircle}
            initial="hidden"
            whileInView="visible"
            className="absolute top-10 left-[40%]"
          >
            <Image
              src="/semicircle.png"
              alt="semicircle"
              height={30}
              width={60}
            />
          </motion.div>
          <motion.div
            initial={{ y: -10, scale: 0, rotate: -164 }}
            whileInView={{ y: 0, scale: 1, rotate: -90 }}
            transition={{
              type: "spring",
              stiffness: 500,
              repeat: 2,
              repeatType: "mirror",
              duration: 10,
            }}
            className="absolute top-16 left-[85%]"
          >
            <Image
              src="/semicircle.png"
              alt="semicircle"
              height={30}
              width={60}
            />
          </motion.div>

          <motion.div
            initial={{ x: -60, scale: 0.4 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 70, duration: 2 }}
            className="absolute bottom-40 -left-4 h-16 w-16 rounded-full bg-[#ca7072] opacity-40"
          ></motion.div>
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 700, duration: 10 }}
            className="absolute top-10 right-10 h-8 w-8 rounded-full bg-[#ca7072] opacity-60"
          ></motion.div>
          <div className="absolute -bottom-4 left-64 h-16 w-16 rounded-full bg-[#eb695b]"></div>
          <motion.div
            initial={{ x: 70, y: 30, scale: 0.3 }}
            whileInView={{ x: 0, y: 0, scale: [0, 0.4, 0.8, 1, 0.8, 1] }}
            transition={{ type: "spring", stiffness: 700, duration: 10 }}
            className="absolute flex justify-center items-center top-20 right-36 h-8 w-8 rounded-full bg-[#f6d3bd]"
          >
            <div className="h-3 w-3 rounded-full bg-[#eb695b]"></div>
          </motion.div>
        </div>

        {/* right side */}
        <div className=" relative flex-1 flex justify-center items-center">
          <motion.div
            initial={{ x: 60, rotate: 360 }}
            whileInView={{ x: 0, rotate: 0 }}
            transition={{ type: "spring", duration: 10 }}
            className="rounded-full border-3 border-white border-dashed h-[80%] w-[80%] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: 360 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                duration: 10,
                repeat: 2,
                repeatType: "mirror",
              }}
              className="rounded-full h-[70%] w-[70%] bg-[#e0d8fa]"
            ></motion.div>
          </motion.div>

          <motion.div
            variants={ghost}
            initial="initial"
            whileInView="animate"
            className="absolute z-10 bottom-28 left-28"
          >
            <Image src="/ghost_1.png" alt="ghost" height={80} width={80} />
          </motion.div>
          <motion.div
            variants={ghost}
            initial="initial"
            whileInView={{ rotate: -35, x: 0, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, duration: 10 }}
            className="absolute z-10 bottom-84 right-14"
          >
            <Image src="/ghost_2.png" alt="ghost2" height={60} width={60} />
          </motion.div>
          <motion.div
            variants={ghost}
            initial="initial"
            whileInView="animate"
            className="absolute z-10 top-28 left-24"
          >
            <Image src="/ghost_4.png" alt="ghost_3" height={70} width={70} />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0.5, rotate: 45 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, duration: 10 }}
            className="absolute z-10 "
          >
            <Image src="/phone.png" alt="phone view" height={600} width={600} />
          </motion.div>
          <motion.div
            initial={{ scale: 0.6, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
            className="absolute z-20 left-[10%]"
          >
            <Image
              src="/phoneCards.png"
              alt="phone view"
              height={400}
              width={400}
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0.1, y: 10 }}
            whileInView={{ sclae: [0.1, 0.4, 0.8, 1, 0.8, 1], y: 0 }}
            transition={{ type: "spring", stiffness: 300, duration: 10 }}
            className="absolute -top-3 left-72 h-8 w-8 rounded-full bg-[#ca7072] opacity-40"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
