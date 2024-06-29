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
        'PD-L1 Levels High',
        'TP53 Mutation',
        'ERBB2 Mutation',
        'BRAF Mutation',
        'CDKN2A Mutation',
        'CTNNB1 Mutation',
    ];

    let passCount = 0; // To count the number of passing tests

    // Function to update the checklist item
    function updateChecklistItem(item, index) {
        const delay = (index + 1) * 1000;
        setTimeout(() => {
            const checklistDiv = document.createElement('div');
            checklistDiv.className = 'checklist-item';
            checklistDiv.textContent = item;

            if (index === 0) {
                checklistDiv.classList.add('green'); // First item green
                passCount += 1; // Increment the pass count
            } else {
                checklistDiv.classList.add('red'); // Rest items red
            }

            resultContainer.appendChild(checklistDiv);

            if (index === checklistItems.length - 1) {
                const finalMessage = document.createElement('div');
                finalMessage.className = 'final-message';
                finalMessage.textContent = passCount >= 1 ? 'Immunotherapy is a viable option' : 'Immunotherapy is not a viable option';
                resultContainer.appendChild(finalMessage); // Append to the result container
            }
        }, delay); // Delay of a second between each item
    }

    // Generate the checklist items with delay
    checklistItems.forEach((item, index) => {
        updateChecklistItem(item, index);
    });
}
