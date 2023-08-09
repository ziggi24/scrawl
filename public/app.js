console.log('connected!');


var canvas = document.createElement("canvas");

canvas.width = 200;
canvas.height = 200;
canvas.style.border = "1px solid #000000";
canvas.style.backgroundColor = "#cdbb96";
canvas.style.border ="border:1px dashed orangered;"

var url = canvas.toDataURL();

var a = document.createElement('a');
a.download = Date.now()+'.png';
a.href = url;
a.textContent = 'Download PNG';

var section = document.querySelector('#preview');
section.appendChild(canvas);
section.appendChild(document.createElement('br'));
section.appendChild(a);