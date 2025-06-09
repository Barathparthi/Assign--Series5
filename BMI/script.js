document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('result');
    
    if (weight <= 0 || height <= 0) {
        resultDiv.innerHTML = '<p class="error">Please enter valid positive numbers for weight and height.</p>';
        return;
    }
    
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = Math.round(bmi * 10) / 10;
    
    let category = '';
    let colorClass = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        colorClass = 'underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal';
        colorClass = 'normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
        colorClass = 'overweight';
    } else {
        category = 'Obese';
        colorClass = 'obese';
    }
    
    resultDiv.innerHTML = `
        <div class="result-content ${colorClass}">
            <h3>Your BMI Result</h3>
            <div class="bmi-value">${bmiRounded}</div>
            <div class="bmi-category">${category}</div>
            <div class="bmi-ranges">
                <small>
                    <strong>BMI Ranges:</strong><br>
                    Under 18.5 - Underweight<br>
                    18.5 - 24.9 - Normal<br>
                    25 - 29.9 - Overweight<br>
                    30 or more - Obese
                </small>
            </div>
        </div>
    `;
});