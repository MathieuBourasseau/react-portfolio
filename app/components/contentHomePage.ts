
// Types 

type OptionType = {
    label: string;
    value: string;
}

type IconConfig = {
    label: string;
    style: string;
}

type itemsConfig = {
    icon: IconConfig[];
    label: string;
    url: string;
    options?: OptionType[]; 
}