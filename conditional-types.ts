type DogAge = Dog extends Animal ? number : string;

const aDog: DogAge = 1;
// const anotherDog: DogAge = "doggie";
