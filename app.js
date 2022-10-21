const capitalAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const mainBox = document.getElementById('main')



// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const randomIntiger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNumber(0, 2))
// console.log('randomNumber', randomNumber, alphabetIntervel)


const alphabetIntervel = () => {
    setInterval(() => {
        renderAlphabets()
        console.log('object', renderAlphabets())
    }, 1000);
}

const init = () => {
    alphabetIntervel()
    renderAlphabets()
}

const getAlphabets = () => {
    const alphabets = randomIntiger(0, 2) ? lowercaseAlphabet : capitalAlphabet;
    return alphabets[randomIntiger(0, 26)]
}

const renderAlphabets = () => {
    mainBox.innerHTML = `<span class"alphabets">${getAlphabets()}  </span>`
    let top = 0
    setInterval(() => {
        top += '20px'
        mainBox.style.top = top;
    }, 1000);
}


init()


// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// const rainDrops = [];
// const context = mainBox.getContext('2d');

// const draw = () => {
//     context.fillStyle = 'rgba(0, 0, 0, 0.05)';
//     context.fillRect(0, 0, mainBox.width, mainBox.height);

//     context.fillStyle = '#0F0';
//     context.font = fontSize + 'px monospace';

//     for (let i = 0; i < rainDrops.length; i++) {
//         const text = capitalAlphabet.charAt(Math.floor(Math.random() * capitalAlphabet.length));
//         context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

//         if (rainDrops[i] * fontSize > mainBox.height && Math.random() > 0.975) {
//             rainDrops[i] = 0;
//         }
//         rainDrops[i]++;
//     }
// };

// setInterval(draw, 30);