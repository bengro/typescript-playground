type Person = {
  name: string;
  address: string;
  age: number;
  height?: number;
};

type PersonProperties = keyof Person;

function setPersonDetails<K extends PersonProperties>(
  person: Person,
  key: K, // union of all properties of Person
  value: Person[K] // return type of a given property
) {
  person[key] = value;
}

function getPersonDetails(person: Person, key: PersonProperties) {
  return person[key];
}

type Name = Person["name"];
