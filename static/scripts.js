async function handleFormSubmit(event, url, resultId) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const params = new URLSearchParams(formData).toString();
    const response = await fetch(`${url}?${params}`);
    const data = await response.json();
    document.getElementById(resultId).innerText = `Result: ${data.result}`;
}

document.getElementById('pow-form').addEventListener('submit', (event) => handleFormSubmit(event, '/pow', 'pow-result'));
document.getElementById('fibonacci-form').addEventListener('submit', (event) => handleFormSubmit(event, '/fibonacci', 'fibonacci-result'));
document.getElementById('factorial-form').addEventListener('submit', (event) => handleFormSubmit(event, '/factorial', 'factorial-result'));
