const person = {};

const name = person.name ?? 'unknown';
// nullish coalescing
const name =
    person.name === undefined || person.name === null ? 'unknown' : person.name;