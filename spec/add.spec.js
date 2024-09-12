// spec/add.spec.js
const add = require('../add');

describe('Функция add', () => {
  it('должна возвращать сумму двух чисел', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
    expect(add(0, 0)).toBe(0);
    expect(add(1, -1)).toBe(0);
  });
});
