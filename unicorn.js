var makeUnicorn = function () {
    var step = 18;
    var pos = {
        x: 000,
        y: 500
    };
    var dx = 50;

    // Steps at which the colors appear.
    var start = {
        blue: 0,
        green: 10,
        darkblue: 12,
        yellow: 15,
        violet: 16,
        red: 20,
    };

    // Steps at which the colors finish appearing.
    var end = {
        blue: start.blue + 20,
        green: start.green + 13,
        darkblue: start.darkblue + 13,
        yellow: start.yellow + 12,
        violet: start.violet + 11,
        red: start.red + 10,
    };

    // The colors.
    var fill = {
        blue: "#00aaff",
        green: "#00ffaa",
        darkblue: "#000077",
        yellow: "#ffff00",
        violet: "#ff00ff",
        red: "#ff0000",
    };

    // A fuzz number to make things pretty.
    var offset = {
        blue: 0,
        green: 15,
        darkblue: 14,
        yellow: 40,
        violet: 43,
        red: 50,
    };

    // True if a color appears on the top of the dash.
    var top = {
        blue: true,
        green: true,
        yellow: true,
        red: true,
    };

    // True if a color also appears on the bottom of the dash.
    var bottom = {
        blue: true,
        red: true,
    };

    // Color names, in order of drawing.
    var colors = [
        "red",
        "violet",
        "yellow",
        "darkblue",
        "green",
        "blue",
    ];

    var endpoint = function(color) {
        var p = (step - start[color]) / (end[color] - start[color]);
        if (step > end[color]) p = 1;

        return {
            r: 400 * p * p,
            theta: 3 * Math.PI / 2 - (Math.PI/2) * p,
        };
    }

    return {
        draw: function () {
            context.save();
            var s = 0, p = 0, o = 0;
            var x = cx(pos.x);
            var y = cy(pos.y);

            var ep, er;

            colors.each(function (color) {
                if (step >= start[color]) {
                    context.fillStyle = fill[color];
                    p = (step - start[color]) / (end[color] - start[color]);
                    if (p > 1) p = 1;
                    o = offset[color];

                    context.globalAlpha = p * p * p;

                    ep = endpoint(color);
                    er = rect(ep.r, ep.theta);

                    context.beginPath();
                    context.moveTo(x, y);

                    if (top[color]) {
                        context.bezierCurveTo(x + 10, y - o - 30 * p,
                                              x + er.x, y + er.y - o * (1-p),
                                              x + er.x, y + er.y - o * (1-p));
                        if (color === "blue") context.lineTo(x + er.x, y);
                        context.moveTo(x, y);
                    }
                    if (!top[color] || bottom[color]) {
                        context.bezierCurveTo(x + 10, y + o + 30 * p,
                                              x + er.x, y - er.y + o * (1-p),
                                              x + er.x, y - er.y + o * (1-p));
                        if (color === "blue") context.lineTo(x + er.x, y);
                    }
                    context.fill();
                    context.closePath();
                }
            });

            context.restore();
            step += 1;
            if (pos.x > 400) starBroken = true;
            pos.x += dx;
        },
    };
};

