const capitalAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
const lowercaseAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];


// const mainBox = document.getElementById("main");

// ///////Examlpe
// //canvas.width = window.innerWidth;
// //canvas.height = window.innerHeight;

// const randomIntiger = (min, max) =>
//     Math.floor(Math.random() * (max - min)) + min;
// // console.log(randomNumber(0, 2))
// // console.log('randomNumber', randomNumber, alphabetIntervel)

// const alphabetIntervel = () => {
//     setInterval(() => {
//         renderAlphabets();
//     }, 1000);
// };

// const init = () => {
//     alphabetIntervel();
//     renderAlphabets();
// };

// const getAlphabets = () => {
//     const alphabets = randomIntiger(0, 2) ? lowercaseAlphabet : capitalAlphabet;
//     return alphabets[randomIntiger(0, 26)];
// };

// const renderAlphabets = () => {
//     mainBox.innerHTML = `<span class"alphabets">${getAlphabets()}  </span>`;
//     let top = 0;
//     setInterval(() => {
//         top += "20px";
//         mainBox.style.top = top;
//     }, 1000);
// };

// init();

const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const smallLetter = 'abcdefghijklmnopqrstvuwxyz';
const capLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '010'; 

const alphabet = smallLetter + capLetter + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);



// var p = $('p');
// p.each(function(){
//     var t = $(this).text().replace(/\s/g, unescape('%a0')); /* Spaces collapse, so make them non-breaking */
//     var o = '';
//     for(var i = 0; i< t.length; i++){
//         o += '<span class="normal">' + t[i] + '</span>';
//     }
//     $(this).html(o);
// });

// function lift(){
// 	$('.fallen').removeClass('fallen').addClass('normal');
// 	window.setTimeout(drop, 60);
// }

// function drop(){
//   var s = $('span.normal');
//   if (s.length == 0){
//    window.setTimeout(lift, 10000);
//    return;
//   }
  
//   s.eq(Math.floor(Math.random() *   s.length)).addClass('fallen').removeClass('normal');
// 	window.setTimeout(drop, 60);
// }

// drop();
