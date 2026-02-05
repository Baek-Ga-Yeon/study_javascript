const users = [
  { name: "가연", isActive: true, isBlocked: false },
  { name: "서환", isActive: true, isBlocked: true },
  { name: "이지", isActive: false, isBlocked: false },
];

const result = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].isActive && !users[i].isBlocked) {
    result.push(users[i])
  }
};

console.log(result)

// 화살표 함수

users.filter(u => u.isActive && !u.isBlocked);


// 실무 스타일

const users = [
  { name: "가연", isActive: true, isBlocked: false },
  { name: "서환", isActive: true, isBlocked: true },
  { name: "이지", isActive: false, isBlocked: false },
];

function test(user) {
  return user.isActive && user.isBlocked === false
};
const result = users.filter(test);
console.log(result);


console.log("-------------")


const users = [
  { name: "가연", price: 10000, isActive: true, role: "vip", coupon: true },
  { name: "서환", price: 100000, isActive: false, role: "normal", coupon: true },
];

// 조건 함수들
function isActiveUser(user) {
  return user.isActive;
}

function hasCoupon(user) {
  return user.coupon;
}

function discountPrice(user) {
  return user.price * 0.9;
}

// 실행
const result = users
  .filter(isActiveUser)
  .filter(hasCoupon)
  .map(user => ({
    name: user.name,
    finalPrice: discountPrice(user),
  }));

console.log(result);