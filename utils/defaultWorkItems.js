import { v4 as uuidv4 } from "uuid";
import { uuid } from "uuidv4";
const defaultWorkItems = [
  { what: "Saugen", category: "Wohnzimmer + Küche", time: "9" },
  { what: "Saugen", category: "Unter coauch", time: "9" },
  { what: "Saugen", category: "Flur", time: "7.5" },
  { what: "Saugen", category: "Divinity zimmer", time: "9" },
  { what: "Saugen", category: "Divinity zimmer", time: "9" },
  { what: "Saugen", category: "Schlafzimmer", time: "9" },
  { what: "Saugen", category: "Johans Zimmer", time: "9" },
  { what: "Saugen", category: "Großes Bad", time: "5" },
  { what: "Saugen", category: "Kleines Bad", time: "3" },
  { what: "Saugen", category: "Treppenhaus", time: "9.5" },
];

export const mappedDefaultWorkItems = defaultWorkItems.map((item) => {
  return { ...item, id: uuidv4(), isChecked: false };
});
