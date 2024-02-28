
export function randomColor() {
    var r = Math.floor(Math.random() * 256); 
    var g = Math.floor(Math.random() * 256); 
    var b = Math.floor(Math.random() * 256); 

    var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    return color;
}