
// find

const orders = [
  { name : "가연", product : "키보드", status : "cancelled" },
  { name : "서환", product : "컴퓨터", status : "done" },
  { name : "이지", product : "마우스", status : "cancelled" },
];
const cancelledOrder = orders.find(o => o.status === "cancelled")
console.log(cancelledOrder);

// some

const orders = [
  { name : "가연", product : "키보드", price : 60000 },
  { name : "서환", product : "컴퓨터", price : 100000 },
  { name : "이지", product : "마우스", price : 10000 },
];

const hasExpensiveOrder = orders.some(o => o.price >= 50000)
console.log(hasExpensiveOrder);

// every

const orders = [
  { name : "가연", product : "키보드", status : "paid" },
  { name : "서환", product : "컴퓨터", status : "unpaid" },
  { name : "이지", product : "마우스", status : "paid" },
];

const isAllPaid = orders.every(o => o.status === "paid")
console.log(isAllPaid);

// 실무형 조합

const orders = [
  { id : 1, status : "paid" },
  { id : 2, status : "paid" },
  { id : 3, status : "unpaid" }
];

const hasUnpaid = orders.some(o => o.status === "unpaid");
const allPaid = orders.length > 0 && orders.every(o => o.status === "paid");
const canShip = allPaid;