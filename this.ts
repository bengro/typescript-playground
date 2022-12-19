class Rectangle {
  private w: number;
  private h: number;

  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  // explicitly defining this as a Rectangle, not an actual parameter exposed to public API
  getAreaFunction(this: Rectangle) {
    return () => {
      return this.w * this.h;
    };
  }
}

const rectangle = new Rectangle(100, 100);

const area = rectangle.getAreaFunction();
