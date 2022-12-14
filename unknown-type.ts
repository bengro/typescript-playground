const myValue: unknown = {
  garbage: "yes",
};

function narrowUnknownType(value: unknown) {
  if (typeof value === "string") {
    console.log(value);
    return value;
  } else if (typeof value === "object") {
    console.log(JSON.stringify(value));
    return value as Object;
  } else {
    throw Error("cant deal with type");
  }
}

const value = narrowUnknownType(myValue);

const anyValue: any = "some value";
// const anyString: string = anyValue; OK
// const anyObject: Album = anyValue; OK

const unknownValue: unknown = "some unknown value";
// const unknownString: string = unknownValue; ERROR
