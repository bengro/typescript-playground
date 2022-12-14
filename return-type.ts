function createPerson() {
  return {
    firstName: "Alice",
    lastName: "Malice",
    fullName: `${this.firstName} ${this.lastName}`,
  };
}

function logPerson(person: ReturnType<typeof createPerson>) {
  console.log(person);
}
