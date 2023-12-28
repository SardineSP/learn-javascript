// 단축속성명 사용한 코드 비교
function makePerson1(age, name) {
    return {age: age, name: name};
}
function makePerson2(age, name) {
    return {age, name};
}