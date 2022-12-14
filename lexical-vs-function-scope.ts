class Test {
  // function definition from before ES6
  functionScope() {
    console.log(`this: ${this}`);
    this.hello();
  }

  // arrow function
  lexicalScope = () => {
    console.log(`this: ${this}`);
    this.hello();
  };

  hello() {
    console.log("Hello hello!");
  }
}

// This only print "hello hello!" once
const test = new Test();
test.functionScope();
setTimeout(test.functionScope, 100);

// This keeps the this reference local to the class, hence printing "Hello hello!" twice.
test.lexicalScope();
setTimeout(test.lexicalScope, 100);
