
// 1

const statusMap = {
  paid : "결제 완료",
  unpaid : "미결제",
  cancelled : "주문 취소"
};

const order = { id : 1, status : "paid", price : 50000 };
const { status, ...rest } = order
const newOrder = {
  ...rest,
  status,
  statusLabel : statusMap[status]
}

console.log(newOrder)

// 2

const deliveryMap = {
  preparing : "상품 준비 중",
  shipping : "배송 중",
  delivered : "배송 완료"
};

const delivery = {
  id : 101,
  status : "shipping",
  address : "서울시 강남구"
};

const { status, ...rest } = delivery;

const newDelivery = {
  ...rest,
  status,
  deliveryLabel : deliveryMap[status]
};

console.log(newDelivery);

