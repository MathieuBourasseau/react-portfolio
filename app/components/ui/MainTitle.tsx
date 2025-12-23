import { motion } from "framer-motion"
import React from 'react'

type MainTitleProps = {
    title: string;
    coloredText: string;
}

export default function MainTitle({ title, coloredText }: MainTitleProps) {
    return (
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-lg font-bold text-white md:text-2xl lg:text-center lg:text-3xl lg:mb-4">
                {title}
                {coloredText && (
                    <span className="text-[#F74518]">{coloredText}</span>
                ) }
        </motion.h1>

    )
}
