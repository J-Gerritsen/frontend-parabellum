import {
    Shield,
    Eye,
    Lock,
    UserRoundCheck,
    FileText,
    TrendingUp,
} from "lucide-react";

import type {
    NavigationItem,
    Feature,
    FooterColumn,
} from "@/types/home";

export const navigation: NavigationItem[] = [
    { label: "Lorem", href: "#" },
    { label: "Lorem ipsum", href: "#features" },
    { label: "Lorem ipsum", href: "#features" },
    { label: "Lorem ipsum", href: "#footer" },
    { label: "Lorem", href: "#footer" },
];

export const features: Feature[] = [
    {
        id: 1,
        title: "Lorem ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sodales erat. Sed varius nisi sit amet pharetra dapibus. Cras a quam.",
        icon: Shield,
        label: "LOREM",
        benefits: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
    },
    {
        id: 2,
        title: "Lorem ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sodales erat. Sed varius nisi sit amet pharetra dapibus. Cras a quam.",
        icon: Eye,
        label: "LOREM",
        benefits: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
    },
    {
        id: 3,
        title: "Lorem ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sodales erat. Sed varius nisi sit amet pharetra dapibus. Cras a quam.",
        icon: Lock,
        label: "LOREM",
        benefits: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
    },
    {
        id: 4,
        title: "Lorem ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sodales erat. Sed varius nisi sit amet pharetra dapibus. Cras a quam.",
        icon: UserRoundCheck,
        label: "LOREM",
        benefits: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
    },
    {
        id: 5,
        title: "Lorem ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sodales erat. Sed varius nisi sit amet pharetra dapibus. Cras a quam.",
        icon: FileText,
        label: "LOREM",
        benefits: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
    },
    {
        id: 6,
        title: "Lorem ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sodales erat. Sed varius nisi sit amet pharetra dapibus. Cras a quam.",
        icon: TrendingUp,
        label: "LOREM",
        benefits: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
    },
];

export const footerColumns: FooterColumn[] = [
    {
        title: "LOREM IPSUM",
        links: [
            { label: "Lorem ipsum", href: "#" },
            { label: "Lorem ipsum", href: "#" },
            { label: "Lorem ipsum", href: "#" },
            { label: "Lorem ipsum", href: "#" },
        ],
    },
    {
        title: "LOREM IPSUM",
        links: [
            { label: "Lorem ipsum", href: "#" },
            { label: "Lorem ipsum", href: "#" },
            { label: "Lorem ipsum", href: "#" },
            { label: "Lorem ipsum", href: "#" },
        ],
    },
    {
        title: "LOREM IPSUM",
        links: [
            { label: "Lorem ipsum", href: "#" },
            { label: "Lorem ipsum", href: "#" },
            { label: "Lorem ipsum", href: "#" },
        ],
    },
];