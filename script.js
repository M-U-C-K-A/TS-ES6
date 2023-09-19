var Point = /** @class */ (function () {
    function Point(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    Point.prototype.sePresenter = function () {
        console.log("Mon abscisse est ".concat(this.abs, " et mon ordonn\u00E9e est ").concat(this.ord));
    };
    Point.prototype.calculerDistance = function (p) {
        var dx = p.abs - this.abs;
        var dy = p.ord - this.ord;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Point.prototype.calculerMilieu = function (p) {
        var milieuX = (p.abs + this.abs) / 2;
        var milieuY = (p.ord + this.ord) / 2;
        return new Point(milieuX, milieuY);
    };
    return Point;
}());
sePresenter();
