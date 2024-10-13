// shoppingCart.test.js

const calculateCart = require('./shoppingCart');

describe('calculateCart', () => {
  test('入出力例1', () => {
    const input = `りんご
みかん
りんご
すいか
`;
    const result = calculateCart(input);
    expect(result).toEqual({
      items: [
        {name:'りんご', qty: 2, amount: 396},
        {name:'みかん', qty: 1, amount: 98},
        {name:'すいか', qty: 1, amount: 498}
      ],
      tax: 79,
      totalAmount: 1071
    });
  });

  test('入出力例2', () => {
    const input = `すいか
りんご
りんご
みかん
みかん
すいか
りんご
ビニール袋
`;
    const result = calculateCart(input);
    expect(result).toEqual({
      items: [
        {name:'すいか', qty: 2, amount: 996},
        {name:'りんご', qty: 3, amount: 594},
        {name:'みかん', qty: 2, amount: 196},
        {name:'ビニール袋', qty: 1, amount: 0}
      ],
      tax: 142,
      totalAmount: 1928
    });
  });
});
