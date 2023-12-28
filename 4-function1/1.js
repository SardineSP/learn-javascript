// First class citizen
// 일급 함수
//
// 함수가 다른 변수처럼 취급되면 그 언어는 일급함수를 갖고있다고 말할 수 있다.
const add10 = function (a) {
    return 10 + b;
};

function apply(arr, op) {
    return arr.map(op);
}
apply([1, 2, 3], add10);

function makeAdd(v1) {
    return function(v2){
        return v1 + v2;
    };
}

const add3 = makeAdd(3);
console.log(add3(10));
const add7 = makeAdd(7);
console.log(add7(10));