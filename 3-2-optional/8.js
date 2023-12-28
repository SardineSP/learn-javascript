const person = {};
const name = person?.friends?.[0]?.mother?.name ?? 'default name';
// optional chaining은 nullish coalescing과 사용하기 좋음!