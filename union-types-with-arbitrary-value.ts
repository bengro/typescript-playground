// this is a trick to still get autocompletion, but also allow any string value
type Padding = "small" | "medium" | (string & {});

const padding: Padding = "medium";
