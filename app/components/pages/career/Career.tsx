import { Background } from "../../../types/background";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion"
import { background } from "./contentCareer";

type CareerProps = {
    activeBackground: Background;
}

export default function Career({ activeBackground }: CareerProps) {

    const currentBackground = background[activeBackground];

    return (
        <section className="relative z-20 flex flex-col gap-6 px-[5%] py-6">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-2xl text-white font-bold lg:text-3xl mb-4 text-center"

            >
                    Mon parcours
            </motion.h1>

            <VerticalTimeline 
                className="grid grid-col-1 gap-6"
                lineColor="var(--color-primary-orange)"
            >
                {currentBackground.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        iconStyle={{ background: '#fff', overflow: 'hidden' }}
                        contentStyle={{ background: 'var(--color-primary-grey)' }}
                        icon={
                            <img
                                src={item.logo}
                                alt={item.organization}
                                className="w-full h-full object-contain object-center"
                            />
                        }
                    >

                        {/* WRAPPER */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <h3 className="font-bold text-lg text-primary-orange">{item.title}</h3>
                                <h4 className="font-semibold text-gray-700">{item.organization}</h4>
                                <div className="flex flex-wrap gap-x-3 text-sm text-gray-500 mt-1 italic">
                                    <span>{item.location}</span>
                                    <span>|</span>
                                    <span>{item.period}</span>
                                    <span>|</span>
                                    <span className="font-medium">{item.contract}</span>
                                </div>
                            </div>
                            {/* CONTENT OR MISSION*/}
                            <div className="text-sm space-y-4">
                                {item.content.map((block, blockIndex) => (
                                    <div key={blockIndex}>

                                        {block.category && (
                                            <h5 className="font-semibold underline mb-2 text-gray-800">
                                                {block.category}
                                            </h5>
                                        )}
                                        {/* DETAILS  */}
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            {block.details.map((detail, detailIndex) => (
                                                <li key={detailIndex}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
}