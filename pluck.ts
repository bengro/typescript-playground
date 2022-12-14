type Album = {
  title: string;
  releaseDate: Date;
  recordingType: "studio" | "live";
};

const album1: Album = {
  title: "Let it be",
  releaseDate: new Date(),
  recordingType: "studio",
};

const album2: Album = {
  title: "Revolver",
  releaseDate: new Date(),
  recordingType: "live",
};

function pluck<T, K extends keyof T>(collection: T[], key: K): T[K][] {
  return collection.map((item) => item[key]);
}

const dates: Date[] = pluck([album1, album2], "releaseDate");
const recordingTypes: ("studio" | "live")[] = pluck([album1], "recordingType");
