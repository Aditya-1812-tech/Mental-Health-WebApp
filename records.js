// --- Sleep Logging Function ---
function logSleep() {
            const bedTime = document.getElementById('bedTime').value;
            const wakeUpTime = document.getElementById('wakeUpTime').value;
            const sleepQuality = document.getElementById('sleepQuality').value;
            const messageElement = document.getElementById('sleepMessage');

            if (!bedTime || !wakeUpTime || !sleepQuality) {
                messageElement.textContent = 'Please fill all sleep fields.';
                return;
            }

            // In a real application, you would calculate total sleep time here
            // and then send the data (bedTime, wakeUpTime, sleepQuality) to your server.
            
            messageElement.textContent = `✅ Sleep Logged: Bed ${bedTime}, Wake ${wakeUpTime}, Quality ${sleepQuality}.`;

            // Clear the form fields after successful logging (optional)
            // document.getElementById('bedTime').value = '';
            // document.getElementById('wakeUpTime').value = '';
            // document.getElementById('sleepQuality').value = '';
        }

        // --- Medicine Logging Function ---
        function logMedicine() {
            const medName = document.getElementById('medName').value;
            const medDosage = document.getElementById('medDosage').value;
            const medTime = document.getElementById('medTime').value;
            const messageElement = document.getElementById('medMessage');

            if (!medName || !medDosage || !medTime) {
                messageElement.textContent = 'Please fill all medication fields.';
                return;
            }

            // Data collected and ready to be sent to the backend/stored
            const medicineData = {
                name: medName,
                dosage: medDosage,
                time: medTime
            };
            
            // In a real application, you would send this data to your server.
            
            messageElement.textContent = `✅ Medicine Logged: ${medName} (${medDosage}) at ${medTime}.`;

            // Clear the form fields after successful logging (optional)
            // document.getElementById('medName').value = '';
            // document.getElementById('medDosage').value = '';
            // document.getElementById('medTime').value = '';
        }