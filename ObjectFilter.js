const products = [
  { id : 1, name : "노트북", price : 250000, stock : 3, category : "laptop", IsSale : false },
  { id : 2, name : "게이밍 마우스", price : 59000, stock : 0, category : "mouse", IsSale : true },
  { id : 3, name : "키보드", price : 120000, stock : 5, category : "keyboard", IsSale : true },
  { id : 4, name : "사무용 마우스", price : 19000, stock : 12, category : "mouse", IsSale : false },
  { id : 5, name : "중고 노트북", price : 450000, stock : 1, category : "laptop", IsSale : true }
];
const test = products.filter(p =>
                             p.stock > 0 &&
                             p.price >= 50000 &&
                             (p.category === "mouse" || p.category === "keyboard") &&
                             p.IsSale === true
                            );
console.log(test);