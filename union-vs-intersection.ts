type LifeSpan = {
  birth: Date;
  death?: Date;
};

type PersonSpan = Person & LifeSpan;
type PersonSpanUnion = Person | LifeSpan;

type UnionTest = keyof LifeSpan | keyof Person; // union of all properties
type IntersectionTest = keyof (LifeSpan & PersonSpan);

type AnotherIntersectionTest = keyof LifeSpan & keyof Person;
type AnotherUnionTest = keyof (LifeSpan | Person); // intersection, there is no intersection with {} so = never

const birth: UnionTest = "birth";
const nameProperty: UnionTest = "name";
