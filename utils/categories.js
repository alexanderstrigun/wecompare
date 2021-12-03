import { v4 as uuidv4 } from "uuid";

const categories = [
  { category: "", id: uuidv4() },
  { category: "Küche", id: uuidv4() },
  { category: "Kochen", id: uuidv4() },
  { category: "Putzen", id: uuidv4() },
  { category: "Bad", id: uuidv4() },
  { category: "Einkauf", id: uuidv4() },
  { category: "Einkaufen", id: uuidv4() },
];

export const renderedOptions = categories.map((category) => {
  return <option key={category.id}>{category.category}</option>;
});
