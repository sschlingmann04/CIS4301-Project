import QueryScreenNavButton from "@/components/QueryScreenNavButton";
import React, { useState } from "react";

const CustomQuery = () => {
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        start_Date: "",
        end_date: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const onSubmit = async (event) => {
        setLoading(true);
        {
            /* handle logic 
            send get request for the specified query    
        */
        }
        setLoading(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formValues);
    };

    return (
        <div className="query-page">
            {/* Graph Section */}
            <div className="graph-container">
                <p>Graph</p>
                <div className="flex flex-row w-full bg-gray-400 h-96" />
            </div>

            {/* Query Form Section */}
            <div className="form-container">
                <h2 className="form-label">
                    <span className="border-b-2">Build Custom Query</span>
                </h2>
                <form className="form-styles" onSubmit={handleSubmit}>
                    <div className="form-field-container">
                        <label className="form-label">Form Option 1</label>
                        <input
                            type="text"
                            name="option1"
                            className="form-input"
                            value={formValues.option1}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field-container">
                        <label className="form-label">Form Option 2</label>
                        <input
                            type="text"
                            name="option2"
                            className="form-input"
                            value={formValues.option2}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field-container">
                        <label className="form-label">Form Option 3</label>
                        <input
                            type="text"
                            name="option3"
                            className="form-input"
                            value={formValues.option3}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field-container">
                        <label className="form-label">Form Option 4</label>
                        <input
                            type="text"
                            name="option4"
                            className="form-input"
                            value={formValues.option4}
                            onChange={handleInputChange}
                        />
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
                        page_url="/prebuilt-query"
                        text="Prebuilt Query"
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomQuery;
