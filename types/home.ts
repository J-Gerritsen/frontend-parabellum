import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
    label: string;
    href: string;
}

export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    label: string;
    benefits: string[];
}

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterColumn {
    title: string;
    links: FooterLink[];
}