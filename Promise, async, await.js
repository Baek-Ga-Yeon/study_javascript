// // 1

// function delayVelue() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("완료");
//     }, 1000);
//   });
// }

// async function run() {
//   const result = await delayVelue();
//   console.log(result);
// }

// run();

// // 2

// function addLater(a, b) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// }

// async function run() {
//   const test = await addLater(3, 7);
//   console.log(test);
// }

// run();

// 3

// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve("값은 여기"),ms);
//     });
// }

// async function go(){
//     const test = await sleep(3000)
//     console.log(test)
//     console.log("성공")
// }
// go();

// 4

// function fetchUser() {
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve({ id : 1, name : "가연" })
//         },1000);
//     });
// }

//  async function go2() {
//     const test = await fetchUser()
//      console.log(test)
// }
//  go2()

// 5

// function fetchPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("서버 오류")
//         }, 1000);
//     })
// };

// async function run2() {
//     try {
//         const post = await fetchPost()
//         console.log(post);
//     }
//     catch(err) {
//         console.log("에러 : ", err)
//     }
// }
// run2();

// 6

// function otherUser() {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("유저")
//             },1000);
//     })
// };
// function otherPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("게시글")
//         },1000)
//     })
// }

// async function others() {
//     const user = await otherUser()
//     console.log(user);

//     const post = await otherPost()
//     console.log(post);
// };
// others()
