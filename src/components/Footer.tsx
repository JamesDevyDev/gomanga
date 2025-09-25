import React from "react";
import Link from "next/link";
import { Github } from "lucide-react";

const Footer = () => {
    return (
        <footer
            className="text-white min-h-[160px] flex flex-col relative"
            style={{
                background: "linear-gradient(to bottom, #171717, #b91c1c)",
            }}
        >
            {/* Main Footer Section */}
            <div className="w-full flex px-[50px] md:px-[150px] py-15 items-center justify-between ">
                {/* Logo */}
                <div className="h-[150px] w-[150px] flex-shrink-0">
                    <Link href="/manga-list/1">
                        <img
                            src="/header/logo.png"
                            alt="GoManga Logo"
                            className="h-full w-full object-contain"
                        />
                    </Link>
                </div>

                {/* Content (right side) */}
                <div className="flex flex-col items-center">
                    <Link
                        title="https://github.com/JamesDevyDev"
                        href="https://github.com/JamesDevyDev"
                        className="w-[35px] h-[35px] bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer"
                    >
                        <Github color={"#b91c1c"} />
                    </Link>
                    <div className="text-[9px] text-center text-gray-200 mt-[5px]">
                        show love by following my github.
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="w-full text-center text-xs text-gray-300 pb-4">
                © 2025 GoManga. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
