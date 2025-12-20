function KingStar() {
    let OtherStar = [2, 8];
    let OtherSpace = [5, 2];
    let StarThird = [2, 1];
    let StarThird2 = [2, 1];
    let CenterSpace = [3, 2];
    let CenterSpace2 = [2, 6];
    let star = "*";
    let space = " ";

    // for문 시작

    for (let i = 0; i < 2; i++) {
        let stars = star.repeat(OtherStar[i]);
        let spaces = space.repeat(OtherSpace[i]);
        console.log(spaces + stars);
    }
    for (let j = 0; j < 2; j++) {
        let stars2 = star.repeat(StarThird[j]);
        let spaces2 = space.repeat(CenterSpace[j]);
        let spaces3 = space.repeat(CenterSpace2[j]);
        let stars3 = star.repeat(StarThird2[j]);
        console.log(spaces2 + stars2 + spaces3 + stars3);
    }
}
KingStar();
console.log("----------");