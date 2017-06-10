var hello = "hello";
var hi = "hi";
var abc = 'another';
function f(input) {
    var a = 100;
    if (input) {
        var b = a + 100012;
        return b;
    }
    return a;
}
console.log(f(true));
console.log(f(false));
