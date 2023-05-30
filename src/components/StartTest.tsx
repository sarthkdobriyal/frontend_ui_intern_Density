"use client"
import { FC } from 'react'
import { motion } from 'framer-motion'
import { heading, para, fade } from '@variants/textVariants'


interface StartTestProps {
  
}

const StartTest: FC<StartTestProps> = ({}) => {
  return <div className='w-[80%] h-screen flex flex-col justify-center gap-5 items-center my-16'>
    <motion.span variants={fade} initial='hidden' whileInView='visible' className='text-slate-700 font-semibold text-center text-2xl'> We take privacy seriously</motion.span>
    <motion.span variants={fade} initial='hidden' whileInView='visible' className='text-black  font-bold text-6xl text-center'>Before you get started</motion.span>
    <motion.span variants={fade} initial='hidden' whileInView='visible' className="text-xl w-[50%] text-center text-slate-600">"We won't share your answers with anyone(and won't ever tell you which friend said what about you)"</motion.span>
    <span className='text-black text-4xl'>With Love , 
        <span>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="270.000000pt" height="100.000000pt" viewBox="0 0 384.000000 100.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<motion.path d="M267 836 c-72 -27 -107 -76 -107 -150 0 -116 142 -162 229 -74 17 17
33 40 37 51 7 22 -6 39 -14 17 -3 -8 -22 -32 -42 -52 -33 -33 -44 -38 -85 -38
-62 0 -105 39 -105 97 0 121 119 162 306 107 49 -15 114 -33 144 -41 30 -8 56
-16 58 -18 2 -2 -2 -14 -9 -26 -6 -13 -16 -81 -21 -152 -10 -145 -28 -196 -78
-222 -62 -32 -171 -11 -205 41 -17 27 -35 32 -35 10 0 -22 65 -74 107 -85 49
-14 72 -14 114 0 85 29 109 80 119 249 4 69 13 137 20 153 13 26 16 27 87 27
79 0 127 15 157 49 25 27 4 28 -34 0 -21 -16 -48 -23 -102 -27 l-73 -5 19 22
c28 30 11 39 -25 12 -35 -26 -40 -25 -203 26 -131 40 -206 49 -259 29z"/>
<path d="M2455 778 c-72 -119 -177 -268 -198 -283 -15 -11 -49 -15 -117 -15
-109 1 -163 11 -199 38 -35 25 -37 48 -11 84 23 31 22 42 -2 33 -19 -8 -38
-48 -38 -81 0 -34 41 -69 95 -83 24 -6 88 -11 142 -11 l98 -1 -44 -39 c-99
-90 -254 -126 -342 -81 -23 12 -44 19 -48 16 -12 -13 40 -44 92 -55 101 -20
216 18 327 110 63 53 66 55 155 66 49 6 93 10 96 8 3 -2 9 -34 12 -71 6 -74
22 -127 36 -119 4 3 2 29 -5 58 -8 29 -14 71 -14 94 0 46 12 54 78 54 21 0 32
5 32 14 0 12 -11 13 -56 9 l-56 -6 5 139 c2 76 8 149 12 162 14 43 -12 22 -50
-40z m9 -151 l-7 -115 -46 -6 c-25 -4 -62 -9 -83 -12 l-36 -5 86 130 c48 71
88 128 89 127 2 -2 0 -55 -3 -119z"/>
<path d="M2662 818 c-23 -29 -33 -104 -39 -295 -6 -191 -5 -203 12 -210 12 -4
22 -1 27 8 5 8 23 39 41 69 38 64 63 73 60 20 -1 -19 2 -50 8 -67 14 -45 59
-46 100 -2 l29 31 11 -25 c14 -30 59 -52 92 -43 13 3 36 18 50 32 15 15 27 22
27 16 0 -18 30 -42 54 -42 13 0 31 9 41 20 l18 20 14 -20 c18 -26 63 -26 96 0
l26 21 11 -21 c17 -32 64 -27 91 11 l21 30 19 -30 c33 -54 95 -36 135 40 24
48 10 59 -18 14 -14 -22 -32 -46 -41 -53 -24 -20 -54 -5 -67 34 -10 29 -8 45
14 112 48 146 55 271 17 291 -47 26 -81 -61 -81 -205 l0 -91 -30 -6 c-22 -5
-39 -20 -64 -59 -63 -99 -103 -114 -120 -45 -9 36 -26 51 -26 23 0 -8 -11 -28
-24 -43 -20 -23 -28 -26 -43 -17 -24 15 -28 46 -8 83 17 34 53 48 83 32 23
-12 36 -3 21 16 -13 15 -62 17 -89 3 -10 -5 -34 -34 -53 -63 -44 -66 -60 -79
-93 -79 -43 0 -48 16 -15 50 46 46 38 102 -14 102 -25 0 -47 -22 -64 -66 -17
-42 -66 -88 -85 -81 -12 5 -16 20 -16 56 0 65 -7 81 -36 81 -24 0 -76 -59 -89
-101 -4 -10 -11 -19 -17 -19 -18 0 -2 72 35 155 40 88 63 203 53 259 -11 55
-49 84 -74 54z m49 -45 c6 -16 8 -51 4 -83 -8 -67 -54 -210 -67 -210 -12 0 -1
227 13 283 12 44 35 49 50 10z"/>
<path d="M1226 451 c-15 -22 -26 -45 -26 -50 0 -18 -52 -71 -69 -71 -25 0 -41
20 -41 52 0 38 -26 37 -33 -1 -7 -32 -39 -56 -63 -47 -24 9 -17 73 11 101 25
26 59 33 70 15 9 -15 25 -12 25 4 0 16 -21 26 -55 26 -31 0 -78 -41 -103 -88
-26 -50 -70 -76 -108 -62 l-28 11 33 29 c27 25 32 36 29 67 -3 35 -6 38 -35
41 -27 3 -34 -2 -47 -27 -20 -38 -20 -64 -1 -101 29 -56 85 -66 135 -24 l31
27 15 -22 c18 -25 51 -27 82 -5 21 15 25 15 41 0 43 -39 103 -2 145 92 10 23
23 42 28 42 4 0 8 -34 8 -75 0 -89 17 -100 51 -32 32 62 60 98 73 94 7 -2 11
-29 11 -72 0 -88 15 -93 53 -18 51 101 97 122 86 39 -16 -113 83 -118 140 -8
25 49 1 47 -28 -3 -17 -28 -36 -47 -52 -51 -35 -9 -46 10 -39 66 7 56 -4 73
-41 68 -23 -2 -35 -14 -59 -55 -34 -60 -43 -65 -37 -23 7 49 -5 80 -32 80 -26
0 -42 -16 -79 -80 l-26 -44 -3 69 c-4 87 -23 98 -62 36z"/>
</g>
</svg>

        </span>
    </span>
    <motion.button
        whileHover={{scale: 1.1}}
        whileFocus={{transleteY: -5}}
    className='py-3 px-4 bg-black rounded-2xl text-xl text-white font-bold tracking-wide'>Start test </motion.button>
    <span className='text-lg font-bold text-slate-600 '>Takes only 5 minutes</span>
  </div>
}

export default StartTest