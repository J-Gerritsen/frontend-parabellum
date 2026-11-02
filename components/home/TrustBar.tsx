import { Shield } from "lucide-react";

const items = [
    "LOREM IPSUM DOLOR",
    "LOREM IPSUM",
    "LOREM IPSUM",
    "LOREM IPSUM DOLOR SIT",
    "LOREM IPSUM",
];

export default function TrustBar() {
    return (
        <section className="border-y border-white/10 bg-[#3A3A3A]">
            <div className="mx-auto flex max-w-[1600px] flex-col gap-5 px-5 py-6 sm:px-8 md:flex-row md:flex-wrap md:items-center md:justify-between lg:px-12 xl:px-20">
                <p className="text-[11px] font-semibold text-[#929EAF]">
                    LOREM IPSUM DOLOR SIT AMET
                </p>

                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 text-[11px] font-semibold text-[#929EAF]"
                    >
                        <Shield size={13} />
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
}