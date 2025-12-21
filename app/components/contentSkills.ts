import { IoMdFlame } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import React from 'react'

type ItemsConfig = {
    label: string;
    src: string;
    alt: string;
}

type HardSkillsConfig = {
    category: string;
    items: ItemsConfig[];
}

type SoftSkillsConfig = {
    label: string;
    icon: React.ReactNode;
}