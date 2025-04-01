const RozwiazDelte = require("./script");

test("Dwa pierwiastki dla (1, -3, 2)", () => {
    expect(RozwiazDelte(1, -3, 2)).toEqual([1, 2]);
});

test("Jeden pierwiastek dla (1, -2, 1)", () => {
    expect(RozwiazDelte(1, -2, 1)).toEqual([1]);
});

test("Brak pierwiastków dla (1, 1, 1)", () => {
    expect(RozwiazDelte(1, 1, 1)).toEqual([]);
});
