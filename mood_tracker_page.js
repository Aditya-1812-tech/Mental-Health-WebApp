let selectedMood = null;
        let selectedReasons = [];
        const moodLevels = document.querySelectorAll('.mood-level');
        const reasonButtons = document.querySelectorAll('.reason-button');
        const moodDesc = document.getElementById('mood-description');
        const errorMessage = document.getElementById('errorMessage');

        // --- Mood Selection Logic ---
        const moodDescriptions = {
            1: 'Very Sad - Feeling miserable.', 
            2: 'Bad - Significantly low.', 
            3: 'Below Average - Struggling a bit.', 
            4: 'Neutral-Negative - Not great, not terrible.',
            5: 'Neutral - Just okay.', 
            6: 'Neutral-Positive - Feeling generally fine.',
            7: 'Good - Quite happy and content.', 
            8: 'Very Good - Feeling high energy.', 
            9: 'Great - Almost ecstatic!', 
            10: 'Extremely Happy - Pure bliss!'
        };

        moodLevels.forEach(level => {
            level.addEventListener('click', () => {
                // Remove 'selected' class from all
                moodLevels.forEach(m => m.classList.remove('selected'));
                
                // Add 'selected' class to the clicked one
                level.classList.add('selected');
                selectedMood = parseInt(level.getAttribute('data-mood'));
                
                // Update description
                moodDesc.textContent = moodDescriptions[selectedMood];
            });
        });

        // --- Reason Selection Logic ---
        reasonButtons.forEach(button => {
            button.addEventListener('click', () => {
                const reason = button.getAttribute('data-reason');
                
                if (button.classList.contains('selected')) {
                    // Deselect
                    button.classList.remove('selected');
                    selectedReasons = selectedReasons.filter(r => r !== reason);
                } else {
                    // Select
                    button.classList.add('selected');
                    selectedReasons.push(reason);
                }
            });
        });

        // --- Form Submission Logic ---
        document.getElementById('moodForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Stop form submission
            
            if (selectedMood === null) {
                errorMessage.textContent = 'Please select a mood score (1-10).';
                return;
            }
            
            if (selectedReasons.length === 0) {
                errorMessage.textContent = 'Please select at least one influencing reason.';
                return;
            }

            errorMessage.textContent = ''; // Clear error message

            // Data collected and ready to be sent to the backend/stored
            const moodData = {
                timestamp: new Date().toISOString(),
                moodScore: selectedMood,
                reasons: selectedReasons
            };

            // In a real application, you would use fetch() or axios 
            // to send `moodData` to your server.
            console.log('--- Mood Data Logged ---');
            console.log('Score:', moodData.moodScore);
            console.log('Reasons:', moodData.reasons.join(', '));
            
            // Success message (for demonstration)
            alert(`Mood Logged! Score: ${moodData.moodScore}, Reasons: ${moodData.reasons.join(', ')}. Proceeding to next step...`);
            
            // Optionally, redirect to the main app dashboard or the next logging step
        });