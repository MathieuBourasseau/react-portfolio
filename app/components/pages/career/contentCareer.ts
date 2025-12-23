interface TimelineContent {
    category?: string;
    details: string[];
}

interface TimelineItem {
    title: string;
    organization: string; 
    logo: string;
    location: string;    
    period: string;       
    contract: string;    
    content: TimelineContent[]; // 
}
