// 1

function delayVelue() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("완료");
    }, 1000);
  });
}

async function run() {
  const result = await delayVelue();
  console.log(result);
}

run();

// 2

function addLater(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

async function run() {
  const test = await addLater(3, 7);
  console.log(test);
}

run();
