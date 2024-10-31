import QueryScreenNavButton from "@/components/QueryScreenNavButton";
import { getPrebuiltQuery } from "@/utils/requests";
import React, { useState } from "react";

const PreBuiltQuery = () => {
    const [dropdownSelect, setDropdownSelect] = useState("");
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        query_option: "",
        start_date: "",
        end_date: "",
    });
    const [getResponse, setGetResponse] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const submitFunc = async (event) => {
        setLoading(true);
        console.log("Loading");
        {
            /* handle logic 
            send get request for the specified query    
        */
        }
        setGetResponse(
            getPrebuiltQuery(
                formValues.query_option,
                formValues.start_date,
                formValues.end_date
            )
        );
        setLoading(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitFunc(formValues);
    };

    return (
        <div className="query-page">
            {/* Graph Section */}
            <div className="graph-container">
                <p>Graph</p>
                <div className="flex flex-row w-full bg-gray-400 h-96" />
                {/* <p>Query selected: {getResponse}</p> */}
            </div>
            {/* Query Form Section */}
            <div className="form-container">
                <form className="form-styles" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label className="text-lg font-bold pb-1">
                            <span className="border-b-2">Select Query</span>
                        </label>
                        <select
                            name="query_option"
                            className="form-input py-1"
                            value={formValues.query_option}
                            onChange={handleInputChange}
                        >
                            <option value="q1">Query 1</option>
                            <option value="q2">Query 2</option>
                            <option value="q3">Query 3</option>
                            <option value="q4">Query 4</option>
                            <option value="q5">Query 5</option>
                        </select>
                    </div>

                    {/* date selections */}
                    <div className="flex flex-row space-x-8">
                        <div className="flex flex-col">
                            <label className="form-label">
                                <span className="border-b-2">Start Date</span>
                            </label>
                            <input
                                type="date"
                                name="start_date"
                                className="form-input"
                                value={formValues.start_date}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="form-label">
                                <span className="border-b-2">End Date</span>
                            </label>
                            <input
                                type="date"
                                name="end_date"
                                className="form-input"
                                value={formValues.end_date}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    {/* form submission */}
                    <div className="flex flex-row">
                        <button className="flex flex-row font-semibold bg-blue-400 text-white py-1 rounded-full justify-center w-48">
                            Query
                        </button>
                    </div>
                </form>
                <div className="flex flex-col w-96 space-y-2">
                    <QueryScreenNavButton page_url="/" text="Home" />
                    <QueryScreenNavButton
                        page_url="/custom-query"
                        text="Custom Query"
                    />
                </div>
            </div>
        </div>
    );
};

export default PreBuiltQuery;
