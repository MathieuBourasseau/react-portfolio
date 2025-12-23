import React from 'react'
import { IconType } from "react-icons"
import { SoftSkillsConfig } from "../pages/skills/contentSkills"

type SoftSkillProps = {
    softSkills: SoftSkillsConfig[];
}

export default function SoftSkills( { softSkills } : SoftSkillProps) {
    return (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 xl:grid-cols-2">
            {softSkills.map((skill, i) => (
                <article
                    className="flex font-bold flex-col items-center rounded-xl p-6 gap-4 text-sm text-black bg-[#E2E8F0]"
                    key={i}
                >
                    <div className="text-[40px]">
                        <skill.icon style={{ color: skill.color }} />
                    </div>
                    <p>{skill.label}</p>
                </article>
            ))}
        </div>
    )
}
