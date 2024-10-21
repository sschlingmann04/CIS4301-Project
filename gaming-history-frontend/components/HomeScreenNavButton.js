import Link from "next/link";
import React from "react";

const HomeScreenNavButton = ({ page_url, text }) => {
    return (
        <Link href={page_url}>
            <button className="flex flex-row bg-blue-400 text-white py-2 text-xl my-4 rounded-full w-full justify-center">
                {text}
            </button>
        </Link>
    );
};

export default HomeScreenNavButton;
