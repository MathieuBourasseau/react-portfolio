import { FaComputer } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPlane } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IconType } from "react-icons";

// Types 

type OptionType = {
    label: string;
    value: string;
}

type itemsConfig = {
    icon: IconType
    label: string;
    url: string;
    options?: OptionType[]; 
}

// Links in the right card 

export const cardLinks: itemsConfig[] = [
        { icon: FaComputer, label: "projets", url: "projects" },
        { icon: MdWork, label: "compétences", url: "skills" },
        { 
            icon: FaPlane, 
            label: "parcours", 
            url: "career", 
            options: [ 
                { label: "professionnel", value: "PROFESSIONAL" }, 
                { label: "académique", value: "ACADEMIC" } 
            ]
        },
        { icon: IoIosMail, label: "contact", url: "contact" },
    ]