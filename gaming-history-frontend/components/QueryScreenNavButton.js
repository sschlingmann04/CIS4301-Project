import Link from "next/link";
import React from "react";

const QueryScreenNavButton = ({ page_url, text }) => {
    return (
        <Link href={page_url}>
            <button className="flex flex-row bg-orange-400 text-white py-2 text-lg rounded-full w-full justify-center">
                {text}
            </button>
        </Link>
    );
};

export default QueryScreenNavButton;
