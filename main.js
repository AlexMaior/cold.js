let n = parseInt(readline());
let temp = readline().split(' ');
let neg = 0;
temp.forEach(function (e) {
    if (e < 0) {
        neg++
    }
})
console.log(neg)