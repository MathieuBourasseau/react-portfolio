import Image from "next/image";
import React from 'react';
import { motion } from "framer-motion";
import { IoMdFlame } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { skills, softSkills } from "./contentSkills";
import MainTitle from "../../reusable ui/MainTitle";
import HardSkills from "../../reusable ui/HardSkills";

export default function Skills() {

    return (
        <div className="text-center flex flex-col gap-6 py-[5%] lg:py-8 px-4 lg:px-10 xl:px-[10%]">

            <MainTitle title="Mes compétences"/>

            {/* MAIN CONTENT */}

            <section className="relative lg:z-20 text-white flex flex-col gap-6 max-w-[600px] mx-auto lg:rounded-xl lg:max-w-[1200px] lg:flex-row lg:items-start">

                {/* HARD SKILLS */}

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="w-full lg:w-2/3 flex flex-col gap-6 py-8 p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm border shadow-[0_0_15px_rgba(44,62,80,0.6)] border-[#2C3E50] lg:p-8">
                    <h2 className="text-xl flex justify-center items-center uppercase p-4 rounded-lg gap-6 font-bold bg-[#F74518] lg:mx-auto">
                        <IoMdFlame className="text-[25px]" />
                        Hard skills
                        <IoMdFlame className="text-[25px]" />
                    </h2>

                    {skills.map((skill, i) => (
                        <HardSkills
                            key={i}
                            category={skill.category}
                            items={skill.items}
                        />
                    ))}

                </motion.div>

                {/* SOFT SKILLS */}

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="w-full lg:w-1/3 flex flex-col gap-6 py-8 p-4 bg-neutral-900/50 backdrop-blur-sm border rounded-xl shadow-[0_0_15px_rgba(44,62,80,0.6)] border-[#2C3E50] lg:p-8">
                    <h2 className="text-xl flex justify-center items-center uppercase p-4 rounded-lg gap-6 font-bold bg-[#F74518] lg:mx-auto lg:mb-4">
                        <FaHandshake className="text-[25px]" />
                        Soft skills
                        <FaHandshake className="text-[25px]" />
                    </h2>

                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 xl:grid-cols-2">
                        {softSkills.map((skill, i) => (
                            <article
                                key={i}
                                className="flex font-bold flex-col items-center rounded-xl p-6 gap-4 text-sm text-black bg-[#E2E8F0]"
                            >
                                <div className="text-[40px]">
                                    <skill.icon style={{ color: skill.color }} />
                                </div>
                                <p>{skill.label}</p>
                            </article>
                        ))}
                    </div>

                </motion.div>
            </section>
        </div>
    )
}