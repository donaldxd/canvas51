function makeFont(width, height) {
    // Percentage to actual font width.
    var w = function (d) { return width * d / 100; }
    // Percentage to actual font height.
    var h = function (d) { return height * d / 100; }

    // Some random noise.
    var r = function (n) { return 1-Math.floor(Math.random()*3); }

    var translate = function (x, y) {
        return function (pair) {
            return [x + w(pair[0]) + r(), y + h(pair[1]) + r()];
        }
    };

    return {
        A: function (x, y) {
            return [
                [0, 100],
                [10, 80],
                [20, 60],
                [30, 40],
                [40, 20],
                [50, 0],
                [60, 20],
                [70, 40],
                [80, 60],
                [90, 80],
                [100, 100],
                [30, 70],
                [50, 70],
                [70, 70],
            ].map(translate(x, y));
        },
        B: function (x, y) {
            return [
            ].map(translate(x, y));
        },
        D: function (x, y) {
            return [
            ].map(translate(x, y));
        },
        E: function (x, y) {
            return [
                [0, 0],
                [0, 20],
                [0, 40],
                [0, 60],
                [0, 80],
                [0, 100],
                [25, 0],
                [50, 0],
                [75, 0],
                [100, 0],
                [20, 50],
                [40, 50],
                [60, 50],
                [80, 50],
                [25, 100],
                [50, 100],
                [75, 100],
                [100, 100],
            ].map(translate(x, y));
        },
        H: function (x, y) {
            return [
                [0, 0],
                [0, 20],
                [0, 40],
                [0, 60],
                [0, 80],
                [0, 100],
                [25, 48],
                [50, 48],
                [75, 48],
                [100, 0],
                [100, 20],
                [100, 40],
                [100, 60],
                [100, 80],
                [100, 100],
            ].map(translate(x, y));
        },
        I: function (x, y) {
            return [
                [25, 0],
                [50, 0],
                [75, 0],
                [50, 20],
                [50, 40],
                [50, 60],
                [50, 80],
                [50, 100],
                [25, 100],
                [50, 100],
                [75, 100],
            ].map(translate(x, y));
        },
        O: function (x, y) {
            return [
            ].map(translate(x, y));
        },
        P: function (x, y) {
            return [
            ].map(translate(x, y));
        },
        R: function (x, y) {
            return [
            ].map(translate(x, y));
        },
        S: function (x, y) {
            return [
            ].map(translate(x, y));
        },
        T: function (x, y) {
            return [
                [0, 0],
                [25, 0],
                [50, 0],
                [75, 0],
                [100, 0],
                [50, 20],
                [50, 40],
                [50, 60],
                [50, 80],
                [50, 100],
            ].map(translate(x, y));
        },
        Y: function (x, y) {
            return [
                [0, 0],
                [17, 20],
                [33, 40],
                [67, 40],
                [83, 20],
                [100, 0],
                [50, 60],
                [50, 80],
                [50, 100],
            ].map(translate(x, y));
        },
        comma: function (x, y) {
            return [
            ].map(translate(x, y));
        },
    };
}
