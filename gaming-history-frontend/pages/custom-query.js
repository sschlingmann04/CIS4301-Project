import QueryScreenNavButton from "@/components/QueryScreenNavButton";
import React from "react";

const CustomQuery = () => {
    return (
        <div className="flex flex-col">
            <div>Custom Query</div>
            <div className="flex flex-col w-96 space-y-2">
                <QueryScreenNavButton page_url="/" text="Home" />
                <QueryScreenNavButton
                    page_url="/prebuilt-query"
                    text="Prebuilt Query"
                />
            </div>
        </div>
    );
};

export default CustomQuery;
