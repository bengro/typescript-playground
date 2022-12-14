// "Mapped Type" MyRequired
type MyRequired<O> = {
  [Item in keyof O]-?: O[Item];
};

// Compiler warning
// const requiredProps: MyRequired<Person> = {};
