# TypeScript Playground

- `unknown` cannot be used for nested objects.
- `typeof` applied to variable instances to extract types dynamically.
- `keyof` applied to types to extract properties of a type as a union.
- `typeof keyof` to get all properties of an object as a union of string literals.
- `const ARRAY = ['value'] as const` and `typeof ARRAY[number]` to return all array values as literal union.
- Mapped type are constructs which follow the `[item in collection as type]` pattern to describe type properties.
- Type guards help narrowing the type
- `extends` helps to construct conditional types
