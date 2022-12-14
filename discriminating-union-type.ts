type Circle = {
  kind: "circle";
};

type Rectangle = {
  kind: "rectangle";
};

type Shape = Circle | Rectangle;

function area(shape: Shape) {
  if (shape.kind == "circle") {
  } else if (shape.kind == "rectangle") {
  }

  return shape;
}
