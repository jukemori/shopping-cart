const productPrices = {
  'りんご': 198,
  'みかん': 98,
  'すいか': 498
};

function calculateCart(cartInput) {
  // カートの商品名を配列に変換し、最後の空行を削除
  const products = cartInput.trim().split('\n');
  
  // 商品名ごとに数量と金額を計算するためのマップ
  const itemsMap = new Map();

  products.forEach(product => {
    const price = productPrices[product] || 0; // 商品が価格表にない場合は0円

    if (itemsMap.has(product)) {
      const item = itemsMap.get(product);
      item.qty += 1;
      item.amount += price;
    } else {
      itemsMap.set(product, { name: product, qty: 1, amount: price });
    }
  });

  // マップからアイテムリストを生成（入力順を保持）
  const items = Array.from(itemsMap.values());

  // カート全体の合計金額を計算
  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);

  // 税額を計算（消費税8%、小数点以下切り捨て）
  const tax = Math.floor(subtotal * 0.08);

  // 最終合計金額
  const totalAmount = subtotal + tax;

  return { items, tax, totalAmount };
}

module.exports = calculateCart;
