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
        'TP53',
        'KRAS',
        'ERBB2',
        'BRAF',
        'CDKN2A',
        'CTNNB1'
    ];

    // Function to update the checklist item
    function updateChecklistItem(item, index) {
        setTimeout(() => {
            const checklistDiv = document.createElement('div');
            checklistDiv.className = 'checklist-item';
            checklistDiv.textContent = item;
            const isPass = Math.random() > 0.5; // Randomly determine if the test passes or fails
            checklistDiv.classList.add(isPass ? 'green' : 'red');
            resultContainer.appendChild(checklistDiv);

            if(!isPass){
                allTestsPassed = false;
            }

            if(index == checklistItems.length - 1){
                const finalMessage = document.createElement('div');
                finalMessage.className = 'final-message';
                finalMessage.textContent = allTestsPassed ? 'Patient qualifies for Immunotherapy' : 'Patient does not qualify for Immunotherapy';
                resultContainer.appendChild(finalMessage);
            }
        }, index * 1000); // Delay of 5 seconds between each item
    }

    // Generate the checklist items with delay
    checklistItems.forEach((item, index) => {
        updateChecklistItem(item, index);
    });
}
