type ImmutableObject = Readonly<{
  [key: string]: unknown;
}>;

let immutableObject: ImmutableObject = {
  something: undefined,
  somethingElse: {
    x: "something else",
  },
};

// This is not allowed as we have defined an immutable object
// immutableObject.something = "x";
