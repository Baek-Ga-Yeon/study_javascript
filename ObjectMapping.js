const order = [
  { id : 1, status : "paid" },
  { id : 2, status : "shipping" },
  { id : 3, status : "done" }
];
let StatusMap = {
  paid : "결제 완료",
  shipping : "배송 중",
  done : "배송 완료"
}

let test = order.map(o => `주문 ${o.id} : ${StatusMap[o.status]}`);
console.log(test);