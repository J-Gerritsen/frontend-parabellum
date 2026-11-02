"use client";

import { useState } from "react";
import { Shield, LockKeyhole, Menu, X } from "lucide-react";
import { navigation } from "@/data/home";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative z-50 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-20">
            <div className="flex min-h-[76px] items-center justify-between border-b border-white/20 lg:min-h-[94px]">
                <a href="#" className="flex shrink-0 items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded border border-[#D5AD25] text-[#D5AD25]">
                        <Shield size={19} strokeWidth={1.8} />
                    </div>

                    <div>
                        <p className="font-serif text-[15px] font-bold leading-tight text-white sm:text-lg">
                            LOREM IPSUM
                        </p>
                        <p className="mt-0.5 text-[8px] font-medium uppercase text-[#8993A3]">
                            LOREM IPSUM DOLOR SIT AMET
                        </p>
                    </div>
                </a>

                <nav className="hidden items-center gap-5 lg:flex xl:gap-9">
                    {navigation.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-[12px] font-medium text-[#E5E5E5] transition-colors hover:text-[#D9B32C]"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#features"
                    className="hidden h-[48px] shrink-0 items-center justify-center gap-2 rounded bg-[#365DDC] px-6 text-[12px] font-semibold text-white transition-colors hover:bg-[#294DC1] lg:flex"
                >
                    LOREM IPSUM DOLOR
                    <LockKeyhole size={15} />
                </a>

                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-9 w-9 items-center justify-center rounded border border-white/20 text-white lg:hidden"
                >
                    {menuOpen ? <X size={19} /> : <Menu size={19} />}
                </button>
            </div>

            <div className="pb-3 pt-4 lg:hidden">
                <div className="grid grid-cols-3 gap-x-2 gap-y-4">
                    {navigation.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-center text-[11px] text-[#E3E3E3]"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <a
                    href="#features"
                    className="mt-5 flex h-[42px] w-full items-center justify-center gap-2 rounded bg-[#365DDC] text-[11px] font-semibold text-white"
                >
                    LOREM IPSUM DOLOR
                    <LockKeyhole size={14} />
                </a>
            </div>

            {menuOpen && (
                <nav className="absolute left-5 right-5 top-[72px] z-50 rounded border border-white/15 bg-[#292929] p-4 shadow-xl sm:left-8 sm:right-8 lg:hidden">
                    <div className="flex flex-col gap-4">
                        {navigation.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}