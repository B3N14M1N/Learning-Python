async function handleFormSubmit(event, url, resultIdPrefix) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const params = new URLSearchParams(formData).toString();
    const response = await fetch(`${url}?${params}`);
    const data = await response.json();

    document.getElementById(`${resultIdPrefix}-result-value`).innerText = data.result || "";
    document.getElementById(`${resultIdPrefix}-execution-time`).innerText = data.execution_time || "";
    document.getElementById(`${resultIdPrefix}-cached`).innerText = data.cached !== undefined ? data.cached : "";
}

document.getElementById('pow-form').addEventListener('submit', (event) => handleFormSubmit(event, '/pow', 'pow'));
document.getElementById('fibonacci-form').addEventListener('submit', (event) => handleFormSubmit(event, '/fibonacci', 'fibonacci'));
document.getElementById('factorial-form').addEventListener('submit', (event) => handleFormSubmit(event, '/factorial', 'factorial'));
