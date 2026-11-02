import { ArrowUpRight, LockKeyhole, Shield } from "lucide-react";
import Header from "@/components/layout/Header";

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-[#1F1F1F]">
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/hero-building.jpg')",
                }}
            />

            <div className="absolute inset-0 -z-10 bg-[#151515]/80" />

            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-[#1F1F1F]/80" />

            <Header />

            <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-20 lg:min-h-[600px] lg:grid-cols-[1.45fr_0.9fr] lg:gap-14 lg:px-12 lg:pb-24 lg:pt-20 xl:px-20">
                <div className="max-w-[800px]">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D9B32C]/30 bg-[#D9B32C]/10 px-3 py-1.5 text-[10px] font-semibold text-[#D9B32C]">
                        <LockKeyhole size={13} />
                        LOREM IPSUM DOLOR SIT AMET
                    </div>

                    <h1 className="max-w-[790px] font-serif text-[clamp(34px,4.1vw,62px)] font-bold leading-[1.08] tracking-[-0.025em] text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisci
                    </h1>

                    <p className="mt-7 max-w-[740px] text-[14px] leading-[1.7] text-[#8996A8] sm:text-[16px] lg:text-[17px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
                        sodales erat. Sed varius nisi sit amet pharetra dapibus. Cras a quam
                        gravida, feugiat diam ut, molestie orci. Vivamus consequat auctor
                        porta.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#features"
                            className="inline-flex min-h-[49px] items-center justify-center gap-3 rounded bg-[#D9B32C] px-7 text-[12px] font-bold text-[#181818] transition-colors hover:bg-[#E6C344]"
                        >
                            LOREM IPSUM DOLOR
                            <ArrowUpRight size={17} />
                        </a>

                        <a
                            href="#features"
                            className="inline-flex min-h-[49px] items-center justify-center gap-3 rounded border border-white/30 bg-black/10 px-7 text-[12px] font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            LOREM IPSUM DOLOR
                            <Shield size={16} />
                        </a>
                    </div>
                </div>

                <div className="w-full rounded-lg border border-white/15 bg-[#3A3A3A] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:p-8 lg:mt-12">
                    <p className="text-[11px] font-bold text-[#D9B32C]">
                        LOREM IPSUM DOLOR SIT AMET
                    </p>

                    <div className="my-5 h-px bg-white/20" />

                    <p className="text-[13px] leading-[1.65] text-[#DEDEDE]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
                        sodales erat. Sed varius nisi sit amet pharetra dapibus. Cras a quam
                        gravida, feugiat diam ut, molestie orci.
                    </p>

                    <p className="mt-3 text-[11px] font-semibold text-[#D9B32C]">
                        • &nbsp; LOREM IPSUM DOLOR SIT AMET
                    </p>
                </div>
            </div>
        </section>
    );
}