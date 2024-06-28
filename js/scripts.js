document.getElementById('generate-results-button').addEventListener('click', generateResults);

function generateResults() {
    console.log('generateResults function called'); // Debugging log

    // Get the input values
    const patientName = document.getElementById('patient-name').value;
    const patientId = document.getElementById('patient-id').value;
    const disease = document.getElementById('disease').value;

    console.log(`Patient Name: ${patientName}, Patient ID: ${patientId}, Disease: ${disease}`); // Debugging log

    // Check if values are retrieved correctly
    if (!patientName || !patientId || !disease) {
        alert('Please fill in all the fields.');
        return;
    }

    // Get the result container and clear previous results
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';

    // Create a header for the results
    const header = document.createElement('h2');
    header.textContent = 'Results';
    resultContainer.appendChild(header);

    // Create a new div element to hold the patient info
    const infoDiv = document.createElement('div');
    infoDiv.innerHTML = `<p>Patient Name: ${patientName}</p>
                         <p>Patient ID: ${patientId}</p>
                         <p>Test Order: ${disease}</p>`;
    resultContainer.appendChild(infoDiv);

    // Checklist items
    const checklistItems = [
        'High PD-L1 expression',
        'High tumor mutational burden (TMB)',
        'Positive immune-related gene-expression signatures',
        'Presence of microsatellite instability (MSI)',
        'Balanced and diverse TCR repertoire with activated CD4+ memory T cells',
        'Normal plasma protein expression profiles',
        'Minimal pre-existing comorbidities'
    ];

    let passCount = 0; // To count the number of passing tests

    // Function to update the checklist item
    function updateChecklistItem(item, index) {
        setTimeout(() => {
            const checklistDiv = document.createElement('div');
            checklistDiv.className = 'checklist-item';
            checklistDiv.textContent = item;
            const isPass = Math.random() > 0.5; // Randomly determine if the test passes or fails
            checklistDiv.classList.add(isPass ? 'green' : 'red');
            resultContainer.appendChild(checklistDiv);

            if (isPass) {
                passCount++;
            }

            // If it's the last item, show the final message
            if (index === checklistItems.length - 1) {
                const finalMessage = document.createElement('div');
                finalMessage.className = 'final-message';
                finalMessage.textContent = passCount >= 2 ? 'Immunotherapy is a viable option' : 'Immunotherapy is not a viable option';
                resultContainer.appendChild(finalMessage); // Append to the result container
            }
        }, index * 2000); // Delay of 2 seconds between each item
    }

    // Generate the checklist items with delay
    checklistItems.forEach((item, index) => {
        updateChecklistItem(item, index);
    });
}
