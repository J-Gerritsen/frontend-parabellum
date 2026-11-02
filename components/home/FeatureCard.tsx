import { Check } from "lucide-react";
import type { Feature } from "@/types/home";

interface FeatureCardProps {
    feature: Feature;
}

export default function FeatureCard({
                                        feature,
                                    }: FeatureCardProps) {
    const Icon = feature.icon;

    return (
        <article className="flex h-full flex-col rounded border border-[#555555] bg-[#3A3A3A] p-6 sm:p-7 lg:p-8">
            <div className="flex items-center justify-between">
                <div className="flex h-[49px] w-[49px] items-center justify-center rounded border border-[#CBA621] bg-[#CBA621]/10 text-[#D9B32C]">
                    <Icon size={22} strokeWidth={1.8} />
                </div>

                <span className="text-[10px] font-medium text-[#777777]">
          {feature.label}
        </span>
            </div>

            <h3 className="mt-7 font-serif text-[22px] font-bold text-white">
                {feature.title}
            </h3>

            <p className="mt-3 flex-1 text-[13px] leading-[1.65] text-[#A7A7A7]">
                {feature.description}
            </p>

            <div className="my-6 h-px bg-white/20" />

            <ul className="space-y-2.5">
                {feature.benefits.map((benefit, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-2.5 text-[12px] leading-[1.4] text-[#E1E1E1]"
                    >
                        <Check
                            size={14}
                            strokeWidth={3}
                            className="mt-0.5 shrink-0 text-[#D9B32C]"
                        />
                        {benefit}
                    </li>
                ))}
            </ul>
        </article>
    );
}