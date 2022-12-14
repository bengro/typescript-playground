function makeSound(animal: Animal) {
  if ("meow" in animal) {
    return "meow";
  } else if ("bark" in animal) {
    return "bark";
  }

  return animal;

  // short-hand for
  // _allCasesHandled: never = animal; return _allCasesHandled;
}
