const name = 'mike';
const obj = {
    age: 21,
    name,
    getName() {
        return this.name;
    },
};
// shorthand property names - 단축속성명