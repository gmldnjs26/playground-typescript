interface Album {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: "studio" | "live";
}

const albums: Album[] = [];

function pluck<T>(records: T[], key: keyof T) {
  return records.map((r) => r[key]);
}
function pluck2<T, K extends keyof T>(records: T[], key: K) {
  return records.map((r) => r[key]);
}

const t1 = pluck(albums, "releaseDate"); // const t1: (string | Date)[]
const t2 = pluck(albums, "artist"); // const t2: (string | Date)[]
const t3 = pluck(albums, "recordingType"); // const t3: (string | Date)[]

const t21 = pluck2(albums, "releaseDate"); // const t21: Date[]
const t22 = pluck2(albums, "artist"); // const t22: string[]
const t23 = pluck2(albums, "recordingType"); // const t23: ("studio" | "live")[]
