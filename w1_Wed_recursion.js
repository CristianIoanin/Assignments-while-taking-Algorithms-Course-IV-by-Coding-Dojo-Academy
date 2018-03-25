// Flood Fill

// Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a certain color. 
// We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. 
// The canvas Array .length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, 
// with a length equal to our canvas’ X dimension. You are given a canvas (2-dimensional array of integers), 
// starting coordinate (2-element array), and the color to flood (integer value). Build floodFill (canvas2D, startXY, newColor) ! 
// Replace a pixel’s color value only if it is the same color as the origin coordinate 
// and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent. 

// Given canvas2D of... 

// [  [3,2,3,4,3],
//    [2,3,3,4,0],
//    [7,3,3,4,1],
//    [6,5,3,4,1],
//    [1,2,3,3,3]  ]

// ...plus startXY of [2,2] and newColor of 1…

// … we examine the cells that are directly (not diagonally) adjacent to startXY, which is [2,2]. 
// If any have a value of 3 (the original value at startXY), we change its value to 1 (newColor) 
// and repeat the process with its directly adjacent neighbor cells. 
// We repeat this until the entire zone of similarly-colored cells is changed.

// Our canvas2D becomes...

// [   [3,2,1,4,3],
//     [2,1,1,4,0],
//     [7,1,1,4,1],
//     [6,5,1,4,1],
//     [1,2,1,1,1]  ]


let canvas2D = [  
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,4,1],
    [6,5,3,4,1],
    [1,2,3,3,3]  
];

let canvasX2 = [
    [3,2,3,4,3,3,2,3,4,3],
    [2,3,3,4,0,1,2,3,3,3],
    [7,3,3,4,1,6,5,3,4,1],
    [6,5,3,4,1,2,3,3,4,0],
    [1,2,3,3,3,7,3,3,4,1]
];

let arrayFill = [];
let colors = [];

function floodFill(canvas, startXY, newColor) {
    let x = startXY[0];
    let y = startXY[1];

    colors.push(canvas[y][x]);
    const color = colors[0];
    
    const cardinals = {
        north: (canvas[y-1]) ? canvas[y-1][x] : undefined,
        south: (canvas[y+1]) ? canvas[y+1][x] : undefined,
        west: (canvas[y]) ? canvas[y][x-1] : undefined,
        east: (canvas[y]) ? canvas[y][x+1]: undefined
    };

    if(cardinals.north && cardinals.north === color) { 
        canvas[y-1][x] = newColor;
        arrayFill.push([x, y-1]); 
    }
    if(cardinals.south && cardinals.south === color) { 
        canvas[y+1][x] = newColor;
        arrayFill.push([x, y+1]);
    }
    if(cardinals.west && cardinals.west === color) { 
        canvas[y][x-1] = newColor; 
        arrayFill.push([x-1, y]);
    }
    if(cardinals.east && cardinals.east === color) { 
        canvas[y][x+1] = newColor;
        arrayFill.push([x+1, y]);
    }

    if (arrayFill.length) { return floodFill(canvas, arrayFill.pop(), newColor); }
    colors.length = 0;
    return canvas;
}

console.log(floodFill(canvas2D, [2,2], 1));
console.log(floodFill(canvasX2, [6,3], 9));
console.log(floodFill(canvasX2, [4,4], 8));