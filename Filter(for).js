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