
export function randomColor() {
    var r = Math.floor(Math.random() * 256); // Rouge
    var g = Math.floor(Math.random() * 256); // Vert
    var b = Math.floor(Math.random() * 256); // Bleu

    var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    return color;
}