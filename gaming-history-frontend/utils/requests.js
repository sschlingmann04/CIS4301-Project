const API_URL = "http://localhost:8000";

async function getPrebuiltQuery(query, start_date, end_date) {
    try {
        const response = await fetch(`${API_URL}/prebuilt`);
        console.log(response);
        return response.json();
    } catch (error) {
        console.log(error);
        return { ok: false };
    }
}

export { getPrebuiltQuery };
