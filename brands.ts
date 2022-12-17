// using the _brands property, is a mechanism to enforce nominal typing in TS, which is structurally (duck) typed)
type Meters = number & { _brand: "meters" };
type Seconds = number & { _brand: "seconds" };

const meters = (distance: number) => distance as Meters;
const seconds = (duration: number) => duration as Seconds;

const someMeters = meters(100);
const someSeconds = seconds(10);

// The types are seen as different, thanks to the _brand property. TS treats both types as different.
// if (someMeters == someSeconds) {
// }

type SimpleMeters = number;
type SimpleSeconds = number;

const maybeMeters: SimpleMeters = 100;
const maybeSeconds: SimpleSeconds = 10;

if (maybeMeters === maybeSeconds) {
  console.log(
    "this is legit because TS is applying structural typing - and both types contain a number despite being different types"
  );
}
