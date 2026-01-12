function loadWeeklyData() {
            // Placeholder data based on hypothetical user inputs over 7 days
            const analysisData = {
                avgMood: 6.8,
                avgSleepHours: 6.5,
                mostCommonReason: "Work/Stress",
                sleepCorrelation: "negative",
                exerciseCorrelation: "positive",
                medicationObservation: "Irregularity",
            };

            // Injecting data into the summary cards
            document.getElementById('avgMood').textContent = analysisData.avgMood.toFixed(1);
            document.getElementById('avgSleep').textContent = analysisData.avgSleepHours + 'h';
            document.getElementById('mostCommonReason').textContent = analysisData.mostCommonReason;
        }

        // Run the function to populate the dashboard on load
        loadWeeklyData();