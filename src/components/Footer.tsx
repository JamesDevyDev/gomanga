import React from "react";

const Footer = () => {
    return (
        <footer
            className="text-white h-[300px] flex items-center justify-center relative"
            style={{
                background: "linear-gradient(to bottom, #171717, #b91c1c)",
            }}
        >
            {/* Line */}
            <div className='w-[90%] h-[1px] bg-gray-500 absolute top-[20%]'></div>

            <div className="">
                <p className="text-sm">© 2025 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
