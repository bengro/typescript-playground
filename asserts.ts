let date: Date | undefined;

function assertDate(date?: Date): asserts date is Date {
  if (date instanceof Date) return;
  throw new TypeError("Date not a date.");
}

assertDate(date);

date.toISOString();
