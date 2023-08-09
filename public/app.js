console.log('connected!');

//an array called name list with fake names of authors
const nameList = [
    'SIDNEY ROFFE',
    'EMERSON DINWIDDIE',
    'PHOENIX FERGUSON',
    'TAYLOR NELSON',
    'EMERY WOLFE',
    'RILEY GORDON',
    'TRACY GREENE',
    'GALE FROST',
    'L. R. JOHANSSON',
    'J. R. WARD',
    'JULIAN LAWSON',
    'AVERY HARRIS',
    'JORDAN WOOD',
    'PARIS WISE',
    'SAGE HUDSON',

]
// an array called bookList which contains 25 fake book titles
const bookList = [
    'The Last Thing',
    'Midnight Library',
    'Four Winds',
    'The Invisible Life',
    'Where the Stars Sing',
    'The Vanishing Half',
    'The Whispered Song',
    'The Push',
    'The Story Upstairs',
    'Survivors',
    'The Paris Library',
    'A Lost Apothecary',
];
//changing author names to just have first letter cap
const nameCase = nameList[Math.floor(Math.random() * nameList.length)].toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');;

//changing the author name and book title to a random name and book title from the arrays
let author = document.querySelector('#name').placeholder = nameCase;
let title = document.querySelector('#title').placeholder = bookList[Math.floor(Math.random() * bookList.length)];
let body = document.querySelector('#body').placeholder;
let bgColor = document.querySelector('#bgColor').value || 'white';
let textColor = document.querySelector('#textColor').value || 'black';
let currentFont = 'Courier Prime';
let fontSize = '16px';


// create a function that redraws the entire canvas with the updated parameters
function OLDredrawCanvas() {
    //clear the canvas and redraw the background and text
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle = bgColor;
    const fontSize = '15px';
    const fontFamily = currentFont;
    ctx.font = fontSize + ' ' + fontFamily;
    
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = textColor;

    //redraw author and title
    ctx.fillText(title, canvas.width / 13, canvas.height / 8);
    ctx.fillText(author, canvas.width / 13, canvas.height / 5.5);
    

    //if body is longer than 100 characters, make it wrap to the next line
    if (body.length < 40) {
        ctx.fillText(body, canvas.width / 13, canvas.height / 3);
    }
    if (body.length >= 40 && body.length < 80) {
        ctx.fillText(body.substring(0, 40), canvas.width / 13, canvas.height / 3);
        ctx.fillText(body.substring(40), canvas.width / 13, canvas.height / 2.6);
    } 
    if (body.length >= 80 && body.length < 120) {
        ctx.fillText(body.substring(0, 40), canvas.width / 13, canvas.height / 3);
        ctx.fillText(body.substring(40, 80), canvas.width / 13, canvas.height / 2.6);
        ctx.fillText(body.substring(80), canvas.width / 13, canvas.height / 2.3);
    }
    if (body.length >= 120 && body.length < 160) {
        ctx.fillText(body.substring(0, 40), canvas.width / 13, canvas.height / 3);
        ctx.fillText(body.substring(40, 80), canvas.width / 13, canvas.height / 2.6);
        ctx.fillText(body.substring(80, 120), canvas.width / 13, canvas.height / 2.3);
        ctx.fillText(body.substring(120), canvas.width / 13, canvas.height / 2.05);
    }
    if (body.length >= 160 && body.length < 200) {
        ctx.fillText(body.substring(0, 40), canvas.width / 13, canvas.height / 3);
        ctx.fillText(body.substring(40, 80), canvas.width / 13, canvas.height / 2.6);
        ctx.fillText(body.substring(80, 120), canvas.width / 13, canvas.height / 2.3);
        ctx.fillText(body.substring(120, 160), canvas.width / 13, canvas.height / 2.05);
        ctx.fillText(body.substring(160), canvas.width / 13, canvas.height / 1.8);
    }
    if (body.length >= 200 && body.length < 240) {
        ctx.fillText(body.substring(0, 40), canvas.width / 13, canvas.height / 3);
        ctx.fillText(body.substring(40, 80), canvas.width / 13, canvas.height / 2.6);
        ctx.fillText(body.substring(80, 120), canvas.width / 13, canvas.height / 2.3);
        ctx.fillText(body.substring(120, 160), canvas.width / 13, canvas.height / 2.05);
        ctx.fillText(body.substring(160, 200), canvas.width / 13, canvas.height / 1.8);
        ctx.fillText(body.substring(200), canvas.width / 13, canvas.height / 1.6);
    }
    if (body.length >= 240 && body.length < 280) {
        ctx.fillText(body.substring(0, 40), canvas.width / 13, canvas.height / 3);
        ctx.fillText(body.substring(40, 80), canvas.width / 13, canvas.height / 2.6);
        ctx.fillText(body.substring(80, 120), canvas.width / 13, canvas.height / 2.3);
        ctx.fillText(body.substring(120, 160), canvas.width / 13, canvas.height / 2.05);
        ctx.fillText(body.substring(160, 200), canvas.width / 13, canvas.height / 1.8);
        ctx.fillText(body.substring(200, 240), canvas.width / 13, canvas.height / 1.6);
        ctx.fillText(body.substring(240), canvas.width / 13, canvas.height / 1.4);
    }
    if (body.length >= 280 && body.length < 320) {
        ctx.fillText(body.substring(0, 40), canvas.width / 13, canvas.height / 3);
        ctx.fillText(body.substring(40, 80), canvas.width / 13, canvas.height / 2.6);
        ctx.fillText(body.substring(80, 120), canvas.width / 13, canvas.height / 2.3);
        ctx.fillText(body.substring(120, 160), canvas.width / 13, canvas.height / 2.05);
        ctx.fillText(body.substring(160, 200), canvas.width / 13, canvas.height / 1.8);
        ctx.fillText(body.substring(200, 240), canvas.width / 13, canvas.height / 1.6);
        ctx.fillText(body.substring(240, 280), canvas.width / 13, canvas.height / 1.45);
        ctx.fillText(body.substring(280), canvas.width / 13, canvas.height / 1.33);
    }
    if (body.length >= 320 && body.length < 360) {
        ctx.fillText(body.substring(0, 40), canvas.width / 13, canvas.height / 3);
        ctx.fillText(body.substring(40, 80), canvas.width / 13, canvas.height / 2.6);
        ctx.fillText(body.substring(80, 120), canvas.width / 13, canvas.height / 2.3);
        ctx.fillText(body.substring(120, 160), canvas.width / 13, canvas.height / 2.05);
        ctx.fillText(body.substring(160, 200), canvas.width / 13, canvas.height / 1.8);
        ctx.fillText(body.substring(200, 240), canvas.width / 13, canvas.height / 1.6);
        ctx.fillText(body.substring(240, 280), canvas.width / 13, canvas.height / 1.45);
        ctx.fillText(body.substring(280, 320), canvas.width / 13, canvas.height / 1.33);
        ctx.fillText(body.substring(320), canvas.width / 13, canvas.height / 1.25);
    }
    if (body.length >= 360 && body.length < 400) {
        ctx.fillText(body.substring(0, 40), canvas.width / 13, canvas.height / 3);
        ctx.fillText(body.substring(40, 80), canvas.width / 13, canvas.height / 2.6);
        ctx.fillText(body.substring(80, 120), canvas.width / 13, canvas.height / 2.3);
        ctx.fillText(body.substring(120, 160), canvas.width / 13, canvas.height / 2.05);
        ctx.fillText(body.substring(160, 200), canvas.width / 13, canvas.height / 1.8);
        ctx.fillText(body.substring(200, 240), canvas.width / 13, canvas.height / 1.6);
        ctx.fillText(body.substring(240, 280), canvas.width / 13, canvas.height / 1.45);
        ctx.fillText(body.substring(280, 320), canvas.width / 13, canvas.height / 1.33);
        ctx.fillText(body.substring(320, 360), canvas.width / 13, canvas.height / 1.25);
        ctx.fillText(body.substring(360), canvas.width / 13, canvas.height / 1.18);
    }

}
function getLines(ctx, body, maxWidth) {
    var words = body.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
        var word = words[i];
         if (word.includes('\n\n')) {           
            let bridge = word.split("\n")
            console.log(bridge);
            currentLine += " " + bridge[0];
            lines.push(currentLine);
            currentLine = "";
            lines.push(currentLine);
            currentLine = "";
            lines.push(currentLine);
            currentLine += bridge[2];
        }
        else if (word.includes('\n')) {
            let bridge = word.split("\n")
            console.log(bridge);
            currentLine += " " + bridge[0];
            lines.push(currentLine);
            currentLine = "";
            lines.push(currentLine);
            currentLine += " " + bridge[1];
        }
        else {
            var width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
    }
    lines.push(currentLine);
    return lines;
}

function redrawCanvas() {
    //clear the canvas and redraw the background and text
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = textColor;
    ctx.font = fontSize + ' ' + currentFont;
    ctx.fillText(title, canvas.width / 13, canvas.height / 8);
    ctx.fillText(author, canvas.width / 13, canvas.height / 5.5);

    console.log(getLines(ctx, body, maxWidth));
    getLines(ctx, body, maxWidth).forEach(function (line, i) {
        let height = canvas.height / 4 + (i * 20);
        // console.log(height);
        ctx.fillText(line, canvas.width / 13, height);
    }   
    );
}
// add an event listener to the bgColor input so that when the user changes the color, the background color will change
document.querySelector('#bgColor').addEventListener('change', function () {
    bgColor = this.value;
    //clear the canvas and redraw the background and text
    redrawCanvas();
});
// add an event listener to the textColor input so that when the user changes the color, the text color will change
document.querySelector('#textColor').addEventListener('change', function () {
    textColor = this.value;
    //clear the canvas and redraw the background and text
    redrawCanvas();
});
//add an event listener to the name field so that when the user types in the text box, the text will update on the canvas
document.querySelector('#name').addEventListener('keyup', function () {
    author = this.value;
    //clear the canvas and redraw the background and text
    redrawCanvas(); 
});
//add an event listener to the title field so that when the user types in the text box, the text will update on the canvas
document.querySelector('#title').addEventListener('keyup', function () {
    title = this.value;
    //clear the canvas and redraw the background and text
    redrawCanvas();
});
//add an event listener to body so that when the user types in the text box, the text will appear on the canvas
document.querySelector('#body').addEventListener('keyup', function () {
    body = this.value;
    //clear the canvas and redraw the background and text
    redrawCanvas();
});
// add an event listener to the font picker drop down which will tak ethe value of the font selected and set it to the font variable
document.querySelector('#fontPicker').addEventListener('change', function(e) {
    const currentFontIndex = e.target.selectedIndex;
    currentFont = e.target.options[currentFontIndex].value;
    //clear the canvas and redraw the background and text
    redrawCanvas();
});
// add an event listener to the font size input so that when the user changes the font size, the text size will change
document.querySelector('#sizePicker').addEventListener('change', function (e) {
    const currentSizeIndex = e.target.selectedIndex;
    fontSize = e.target.options[currentSizeIndex].value + 'px';
    console.log(fontSize);
    //clear the canvas and redraw the background and text
    redrawCanvas();
});

//creating the canvas which is where the image will be created with the text, author, and title provided by user
var canvas = document.createElement("canvas");

canvas.width = 500;
canvas.height = 500;
canvas.style.border = "1px solid #000000";
canvas.style.borderRadius = "5px";
canvas.style.border ="border:1px dashed orangered;"

let maxWidth = canvas.width * 0.8;

//take the text from the user input and put it on the canvas
var ctx = canvas.getContext("2d");
let fontFamily = currentFont;
ctx.font = fontSize + ' ' + fontFamily;
//set the background of the canvas to white 
ctx.fillStyle = bgColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);
//set the color of the text to black
ctx.fillStyle = textColor;
ctx.textAlign = "left";
ctx.fillText(title, canvas.width / 13, canvas.height / 8);
ctx.fillText(author, canvas.width / 13, canvas.height / 5.5);



var url = canvas.toDataURL();

var a = document.createElement('a');
a.download = Date.now()+'.png';
a.href = url;
a.textContent = 'Download PNG';

// add a listener to the a button to update the body of the image and download it
a.addEventListener('click', function(ev) {  
    a.href = canvas.toDataURL();
    a.download = Date.now()+'.png';
}, false);


var section = document.querySelector('#preview');
section.appendChild(canvas);
section.appendChild(document.createElement('br'));
section.appendChild(a);