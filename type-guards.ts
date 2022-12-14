type Animal = Cat | Dog;

type Cat = {
  meow: () => void;
};

type Dog = {
  bark: () => void;
};

const makeAnimalSound = (animal: Animal) => {
  if (isCat(animal)) {
    animal.meow();
  } else {
    animal.bark();
  }
};

const anAnimal: Cat = {
  meow: () => {
    console.log("meeeeow");
  },
};

// This is called a type guard
const isCat = (animal: Animal): animal is Cat => {
  if ("meow" in animal) return true;
  return false;
};

makeAnimalSound(anAnimal);
