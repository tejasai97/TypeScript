var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SweetSweetBasil = (function () {
    function SweetSweetBasil(name, startColor) {
        console.log("hello " + name);
        this.color = startColor;
    }
    SweetSweetBasil.prototype.getColor = function () {
        console.log(this.color);
    };
    return SweetSweetBasil;
}());
var basil = new SweetSweetBasil('teja', 'bright green');
basil.getColor();
console.log(basil.color);
var Basil = (function (_super) {
    __extends(Basil, _super);
    function Basil(name, startColor) {
        return _super.call(this, name, startColor) || this;
    }
    Basil.prototype.setNewColor = function (newcolor) {
        this.color = newcolor;
    };
    return Basil;
}(SweetSweetBasil));
var basil2 = new Basil("basil", "blue");
basil2.getColor();
basil2.setNewColor("red");
basil2.getColor();
