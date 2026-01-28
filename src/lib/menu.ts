export type MenuItem = {
  name: string;
  tags: string[];
  diet: "vegan" | "vegetarian" | "pescatarian" | "omnivore";
};

// Demo menu data. Later this can come from an admin tool / CMS.
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
];
