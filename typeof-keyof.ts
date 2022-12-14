const aPerson = {
  name: "John",
  age: 11,
  city: "Memphis",
};

type APerson = typeof aPerson;
type PersonKeys = keyof APerson;

function readPerson(person: APerson, key: PersonKeys) {
  return person[key];
}

function writePerson<K extends PersonKeys>(
  person: APerson,
  key: K,
  value: APerson[K]
) {
  person[key] = value;
}

// Attempt to achieve the same without generics - does not compile
// function writePerson(
//   person: APerson,
//   key: PersonKeys,
//   value: APerson[PersonKeys]
// ) {
//   person[key] = value;
// }
