import QueryScreenNavButton from "@/components/QueryScreenNavButton";
import React from "react";

const PreBuiltQuery = () => {
    return (
        <div className="flex flex-col">
            <div>Prebuilt Query</div>
            <div className="flex flex-col w-96 space-y-2">
                <QueryScreenNavButton page_url="/" text="Home" />
                <QueryScreenNavButton
                    page_url="/custom-query"
                    text="Custom Query"
                />
            </div>
        </div>
    );
};

export default PreBuiltQuery;
