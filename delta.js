function RozwiazDelte(a, b, c) {
    let delta = Math.pow(b, 2) - (4 * a * c);
    let pierwiastekZDelty = Math.sqrt(delta);

    if (delta > 0) {
        let x1 = (-b - pierwiastekZDelty) / (2 * a);
        let x2 = (-b + pierwiastekZDelty) / (2 * a);
        return [x1, x2];
    } else if (delta === 0) {
        let x0 = -b / (2 * a);
        return [x0];
    } else {
        return [];
    }
}

module.exports = RozwiazDelte;
