var fs = require('fs');
var svg2img = require('svg2img');
var btoa = require('btoa');

function createImage(width, height, color) {
    const svg = `<svg version="1.1" baseProfile="full" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect x="0.5cm" y="0.5cm" width="2cm" height="1cm" stroke="green" stroke-width="4" fill="yellow" /></svg>`
    svg2img(svg, function (error, buffer) {
        //returns a Buffer
        fs.writeFileSync('foo1.png', buffer);
    });
}

createImage(100, 100, 'yellow');
//console.log(createImage(100, 100, 'yellow'));