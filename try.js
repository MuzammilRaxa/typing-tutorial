
// const draw = () => {
// 	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
// 	context.fillRect(0, 0, canvas.width, canvas.height);
	
// 	context.fillStyle = '#0F0';
// 	context.font = fontSize + 'px monospace';

// 	for(let i = 0; i < rainDrops.length; i++)
// 	{
// 		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
// 		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
// 		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
// 			rainDrops[i] = 0;
//         }
// 		rainDrops[i]++;
// 	}
// };

// setInterval(draw, 30);




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
