import { Shield } from "lucide-react";
import { footerColumns } from "@/data/home";

export default function Footer() {
    return (
        <footer
            id="footer"
            className="border-t border-white/10 bg-[#191919]"
        >
            <div className="mx-auto max-w-[1600px] px-5 pb-7 pt-16 sm:px-8 lg:px-12 lg:pt-20 xl:px-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
                    <div className="max-w-[430px]">
                        <a href="#" className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded border border-[#D5AD25] text-[#D5AD25]">
                                <Shield size={19} />
                            </div>

                            <span className="font-serif text-[19px] font-bold text-white">
                Lorem ipsum
              </span>
                        </a>

                        <p className="mt-7 text-[13px] leading-[1.7] text-[#8996A8]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
                            sodales erat. Sed varius nisi sit amet pharetra dapibus. Cras a
                            quam gravida, feugiat diam ut, molestie orci. Vivamus consequat
                            auctor porta.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        {footerColumns.map((column, index) => (
                            <div key={index}>
                                <h3 className="mb-6 text-[11px] font-bold text-[#D9B32C]">
                                    {column.title}
                                </h3>

                                <ul className="space-y-5">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                className="text-[12px] text-[#8996A8] transition-colors hover:text-white"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 border-t border-white/20 pt-8 lg:mt-20">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[11px] text-[#8996A8]">
                            © 2026 Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
                            <a
                                href="#"
                                className="text-[11px] text-[#8996A8] hover:text-white"
                            >
                                Lorem Ipsum
                            </a>

                            <a
                                href="#"
                                className="text-[11px] text-[#8996A8] hover:text-white"
                            >
                                Lorem ipsum dolor sit amet
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}