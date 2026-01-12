document.getElementById('reminderForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const type = document.getElementById('reminderType').value;
            const note = document.getElementById('reminderNote').value.trim();
            const time = document.getElementById('reminderTime').value;
            const messageElement = document.getElementById('formMessage');
            
            // Collect selected days
            const selectedDays = Array.from(document.querySelectorAll('input[name="days"]:checked'))
                                      .map(checkbox => checkbox.value);

            // --- Validation ---
            if (!type || !note || !time) {
                messageElement.textContent = 'Please fill out all reminder details.';
                return;
            }
            if (selectedDays.length === 0) {
                messageElement.textContent = 'Please select at least one day for the reminder to repeat.';
                return;
            }

            messageElement.textContent = ''; // Clear error message

            // Data collected and ready to be sent to the backend/stored
            const reminderData = {
                type: type,
                note: note,
                time: time,
                days: selectedDays
            };
            
            // In a real application, you would send this data to the server
            // for scheduling (using cron jobs, background tasks, or push notification services).
            console.log('--- Reminder Data Saved ---');
            console.log('Reminder:', reminderData.note);
            console.log('Scheduled at:', reminderData.time);
            console.log('Repeats on:', reminderData.days.join(', '));

            // Success feedback
            alert(`Reminder set! "${reminderData.note}" will repeat at ${reminderData.time} on ${reminderData.days.join(', ')}.`);
            
            // Clear form and display success (optional)
            document.getElementById('reminderForm').reset();
        });