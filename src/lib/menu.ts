import { BAY_AREA_MEALS } from "../data/bayAreaMeals";

export type MenuItem = {
  name: string;
  tags: string[];
  diet: "vegan" | "vegetarian" | "pescatarian" | "omnivore";
  restaurant?: string;
  city?: string;
};

function inferDiet(name: string) {
  const n = name.toLowerCase();
  if (n.includes("vegan")) return "vegan" as const;
  if (n.includes("tofu")) return "vegetarian" as const;
  if (n.includes("salmon") || n.includes("ahi") || n.includes("poke"))
    return "pescatarian" as const;
  return "omnivore" as const;
}

// Demo menu data (seed). Later this can come from an admin tool / CMS.
export const MENU: MenuItem[] = [
  {
    name: "Teriyaki salmon + rice + broccoli",
    tags: ["high-protein"],
    diet: "pescatarian",
  },
  {
    name: "Chicken shawarma bowl (GF option)",
    tags: ["high-protein", "gluten-free option"],
    diet: "omnivore",
  },
  {
    name: "Tofu bibimbap + kimchi",
    tags: ["vegetarian"],
    diet: "vegetarian",
  },
  {
    name: "Turkey chili + cornbread",
    tags: ["comfort"],
    diet: "omnivore",
  },
  {
    name: "Pesto pasta + roasted veggies",
    tags: ["vegetarian option"],
    diet: "vegetarian",
  },
  ...BAY_AREA_MEALS.map((m) => ({
    name: m.meal,
    tags: [m.cuisine ?? "bay-area"],
    diet: inferDiet(m.meal),
    restaurant: m.restaurant,
    city: m.city,
  })),
];
