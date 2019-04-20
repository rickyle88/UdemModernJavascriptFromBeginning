// Listen for submit button
document.getElementById('loan-form').addEventListener('submit', function (e) {

    // when loan is being calculated, submit button should be disabled
    document.querySelector('#Submit').disabled = true;

    // Hide Results
    document.getElementById('results').style.display = 'none';

    // Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate Results
function calculateResults(e) {
    console.log('Calculating...');

    // UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');


    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // Calculation
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute the monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    // The isFinite() covers +infinity,-infinity and NaN
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

        // Show Results
        document.getElementById('results').style.display = 'block';

        // Hide loader
        document.getElementById('loading').style.display = 'none';


    } else {
        showError('Please check your number');
    }

    // Enable the submit button 
    document.querySelector('#Submit').disabled = false;
    // e.preventDefault();
}

// Show Error
function showError(error) {

    // how would you prevent the user from clicking the Calculate button multiple times
    if (!document.querySelector('.alert')) {

        // Show Results
        document.getElementById('results').style.display = 'none';

        // Hide loader
        document.getElementById('loading').style.display = 'none';


        // Create a div
        const errorDiv = document.createElement('div');

        // Add class
        errorDiv.className = 'alert alert-danger';

        // Create a text node and append to div
        errorDiv.appendChild(document.createTextNode(error));

        /////////////////////////////////
        // Get elements
        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');

        // Insert error above heading
        card.insertBefore(errorDiv, heading);

        // Clear error after 3 seconds
        setTimeout(clearError, 3000);
    }
}

// Clear error
function clearError() {
    document.querySelector('.alert').remove();
}

// setTimeout(() => {
//     document.querySelector('.alert').remove();
//     }, 3000);