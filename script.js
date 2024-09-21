// Password Generator
/*
const response = document.getElementById(`Password`);

function generatePass() {
    const uppercase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const lowercase = `abcdefghijklmnopqrstuvwxyz`;
    const numbers = `0123456789`;
    const symbols = `!@#$%^&*_-+=?`;

    let passwordLength = 16;
    let includeUppercase = true;
    let includeLowercase = true;
    let includeNumbers = true;
    let includeSymbols = true;

    let passChars  = ``;
    let password = ``;

    passChars += includeUppercase ? uppercase : ``;
    passChars += includeLowercase ? lowercase : ``;
    passChars += includeNumbers ? numbers : ``;
    passChars += includeSymbols ? symbols: ``;

    for (let index = 0; index < passwordLength; index++) {
        let randomIndex = Math.floor(Math.random() * passChars.length);
        password += passChars[randomIndex];
    }
    response.textContent = `Password: ${password}`
}
*/


// Get DOM elements
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const response = document.getElementById('Password');

// Function to generate password
function generatePass() {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*_-+=?';

    // Get user input
    const passwordLength = Number(lengthElement.value);
    const includeUppercase = uppercaseElement.checked;
    const includeLowercase = lowercaseElement.checked;
    const includeNumbers = numbersElement.checked;
    const includeSymbols = symbolsElement.checked;

    // Build the character set based on user selection
    let passChars = '';
    let password = '';

    if (includeUppercase) passChars += uppercase;
    if (includeLowercase) passChars += lowercase;
    if (includeNumbers) passChars += numbers;
    if (includeSymbols) passChars += symbols;

    // Ensure at least one character set is selected
    if (passChars.length === 0) {
        response.textContent = 'Please select at least one character type.';
        return;
    }
    if (passwordLength > 16) {
        response.textContent = 'Please select a value less than or equal to 16.';
        return;
    }

    // Generate the password
    for (let index = 0; index < passwordLength; index++) {
        let randomIndex = Math.floor(Math.random() * passChars.length);
        password += passChars[randomIndex];
    }

    // Display the generated password
    

}

// Attach event listener to generate button (if needed)
document.getElementById('generateBtn').addEventListener('click', generatePass);
