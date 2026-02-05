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