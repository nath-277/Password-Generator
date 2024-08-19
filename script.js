// Password Generator

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



