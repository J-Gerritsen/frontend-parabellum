import FeatureCard from "./FeatureCard";
import { features } from "@/data/home";

export default function Features() {
    return (
        <section
            id="features"
            className="relative isolate overflow-hidden bg-[#202020] py-20 sm:py-24 lg:py-32"
        >
            {/* Diagonal background pattern */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-25"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            140deg,
            transparent 0px,
            transparent 145px,
            #B0B0B0 145px,
            #B0B0B0 260px,
            transparent 260px,
            transparent 295px
          )`,
                    backgroundSize: "100% 620px",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="mb-12 lg:mb-16">
                    <p className="mb-5 flex items-center gap-2 text-[11px] font-bold text-[#D9B32C]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D9B32C]" />
                        LOREM IPSUM DOLOR
                    </p>

                    <h2 className="max-w-[1150px] font-serif text-[30px] font-bold leading-[1.13] text-white sm:text-[38px] lg:text-[43px]">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
                    </h2>

                    <p className="mt-5 max-w-[1050px] text-[14px] leading-[1.7] text-[#8996A8] sm:text-[16px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
                        sodales erat. Sed varius nisi sit amet pharetra dapibus. Cras a
                        quam.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {features.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}