const API_URL = "http://localhost:8000";

async function getPrebuiltQuery(query, start_date, end_date) {
    try {
        console.log(start_date);
        const response = await fetch(
            `${API_URL}/prebuilt/${query}?start_year=${start_date}&end_year=${end_date}`
        );
        console.log(response);
        return response.json();
    } catch (error) {
        console.log(error);
        return { ok: false };
    }
}

export { getPrebuiltQuery };
