const people = [
    {age: 21, name: 'mike'},
    {age: 62, name: 'sara'},
];
for (const { age, name} of people) {
    console.log({age, name});
}