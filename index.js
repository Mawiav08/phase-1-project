document.getElementById("meditationButton").addEventListener("click", function() {
    // Fetch affirmation message from JSON server
    fetch('http://localhost:3001/affirmations')
        .then(response => response.json())
        .then(data => {
            // Randomly select an affirmation message from the JSON data
            const randomIndex = Math.floor(Math.random() * data.length);
            const affirmation = data[randomIndex];
            
            // Affirmation message
            alert(affirmation);
        })
        .catch(error => {
            console.error('Error fetching affirmations:', error);
            alert('Error fetching affirmations. Please try again later.');
        });
});

    // Dropdown button event listener
    const dropdownButton = document.getElementById("menuButton");
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownButton.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    // Journal submission event listener
    const submitJournalButton = document.getElementById("submitJournal");
    const journalForm = document.getElementById("journalForm");
    submitJournalButton.addEventListener("click", function () {
        const feelings = document.getElementById("feelings").value;
        const date = document.getElementById("date").value;
        const journalEntry = {
            feelings: feelings,
            date: date
        };
        console.log("Journal Entry:", journalEntry);
        journalForm.reset();
    });

    // Consultation submission event listener
    const submitConsultationButton = document.getElementById("submitConsultation");
    const consultationForm = document.getElementById("consultationForm");
    submitConsultationButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        alert("Your consultation request has been submitted!");
        consultationForm.reset();
    });
