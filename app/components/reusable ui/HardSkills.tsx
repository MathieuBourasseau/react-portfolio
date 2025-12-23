import React from 'react'
import Image from "next/image"

type SkillItem = {
    src: string;
    alt: string;
    label: string;
}

type HardSkillsProps = {
    category: string;
    items: SkillItem[];
}

export default function HardSkills({ category, items } : HardSkillsProps) {
    return (
        <article
            className="flex flex-col gap-4 lg:py-4"
        >
            <h3 className="text-lg font-bold text-center">{category}</h3>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((item, j) => (
                    <div
                        key={j}
                        className="flex flex-col items-center rounded-xl p-6 gap-4 text-sm text-black bg-[#E2E8F0]">
                        <div className="h-[40px]">
                            <Image
                                src={item.src}
                                width={30}
                                height={25}
                                alt={item.alt}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                        <p className="font-bold">{item.label}</p>
                    </div>

                ))}
            </div>
        </article>
    )
}
