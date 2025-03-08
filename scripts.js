// EMI Calculator Logic
document.getElementById('emiCalculator')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 1200;
    const years = parseFloat(document.getElementById('years').value) * 12;
    
    const emi = (principal * rate * Math.pow(1 + rate, years)) / 
               (Math.pow(1 + rate, years) - 1);
    
    document.getElementById('result').innerHTML = `
        <h3>Monthly EMI: ₹${emi.toFixed(2)}</h3>
    `;
});

// Add similar logic for other calculators
