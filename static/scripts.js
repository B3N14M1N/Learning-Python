async function handleFormSubmit(event, url, resultIdPrefix) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const params = new URLSearchParams(formData).toString();
    try {
        const response = await fetch(`${url}?${params}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();

        document.getElementById(`${resultIdPrefix}-result-value`).innerText = data.result || "";
        document.getElementById(`${resultIdPrefix}-execution-time`).innerText = data.execution_time || "";
        document.getElementById(`${resultIdPrefix}-cached`).innerText = data.cached !== undefined ? data.cached : "";
    } catch (error) {
        showErrorNotification(error.message);
    }
}

document.getElementById('pow-form').addEventListener('submit', (event) => handleFormSubmit(event, '/pow', 'pow'));
document.getElementById('fibonacci-form').addEventListener('submit', (event) => handleFormSubmit(event, '/fibonacci', 'fibonacci'));
document.getElementById('factorial-form').addEventListener('submit', (event) => handleFormSubmit(event, '/factorial', 'factorial'));
