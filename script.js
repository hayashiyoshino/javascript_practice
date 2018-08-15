var items = [
{ name: 'じゃがいも', price: 50, count: 3 },
{ name: '人参', price: 60, count: 1 },
{ name: '豚肉', price: 200, count: 1 },
{ name: '玉ねぎ', price: 50, count: 2 }
];

function higherPrice (targetPrice) {
  for (var i=0; i<items.length; i++) {
    if (items[i].price*items[i].count>targetPrice) {
      window.alert(items[i].name);
    }
  }
}

higherPrice(120);
