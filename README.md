# TypeScript Playground

This is a dumping ground of code and notes as I work through:

- [TypeScript for Professionals 2022](https://www.udemy.com/course/typescript-for-professionals/)
- [Effective Typescript](https://www.amazon.co.uk/Effective-TypeScript-Specific-Ways-Improve/dp/1492053740)

## Notes

- `unknown` denotes a value of unknown shape. Unlike `any` which can be assigned to any type, `unknown` cannot be assigned to another type except via type narrowing.
- `typeof` is applied to value reference instances to extract types dynamically.
- `keyof` is applied to types to extract properties of a type as a union.
- `typeof keyof` to get all properties of an object as a union of string literals.
- `const ARRAY = ['value'] as const` and `typeof ARRAY[number]` to return all array values as literal union.
- Mapped types are constructs which follow the `[item in collection as type]` pattern to describe type properties.
- Type guards help narrowing the type
- `extends` helps to construct conditional types
- Structural typing is a TS feature, and it's making static typing more dynamic.
