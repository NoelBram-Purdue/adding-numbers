const myfunc = require('./sum');

test ('add 3 + 7 to equal 10', () => {
    expect(myfunc(3,7)).toBe(10);
})