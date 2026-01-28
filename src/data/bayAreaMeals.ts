export type BayAreaMeal = {
  restaurant: string;
  city: string;
  meal: string;
  cuisine?: string;
  sourceUrl?: string;
};

// Seed dataset. We'll keep appending over time (target: 2000 meals).
export const BAY_AREA_MEALS: BayAreaMeal[] = [
  { restaurant: "Souvla", city: "San Francisco", meal: "Chicken pita (rotisserie chicken)", cuisine: "Greek" },
  { restaurant: "Souvla", city: "San Francisco", meal: "Lamb salad", cuisine: "Greek" },
  { restaurant: "The Bird", city: "San Francisco", meal: "Fried chicken sandwich", cuisine: "American" },
  { restaurant: "The Bird", city: "San Francisco", meal: "Chicken tenders", cuisine: "American" },
  { restaurant: "Mendocino Farms", city: "San Francisco", meal: "Pork belly banh mi", cuisine: "Sandwiches" },
  { restaurant: "Mendocino Farms", city: "San Francisco", meal: "Avocado & quinoa superfood ensalada", cuisine: "Salads" },
  { restaurant: "Sweetgreen", city: "San Francisco", meal: "Harvest Bowl", cuisine: "Salads" },
  { restaurant: "Sweetgreen", city: "San Francisco", meal: "Chicken Pesto Parm", cuisine: "Salads" },
  { restaurant: "Daeho Kalbijjim & Beef Soup", city: "San Francisco", meal: "Braised short ribs (kalbijjim)", cuisine: "Korean" },
  { restaurant: "Daeho Kalbijjim & Beef Soup", city: "San Francisco", meal: "Beef soup", cuisine: "Korean" },
  { restaurant: "Ramen Nagi", city: "Palo Alto", meal: "Original Tonkotsu Ramen", cuisine: "Japanese" },
  { restaurant: "Ramen Nagi", city: "Palo Alto", meal: "Vegan Ramen", cuisine: "Japanese" },
  { restaurant: "Gott's Roadside", city: "Palo Alto", meal: "California burger", cuisine: "American" },
  { restaurant: "Gott's Roadside", city: "Palo Alto", meal: "Ahi poke crispy tacos", cuisine: "Seafood" },
  { restaurant: "Philz Coffee", city: "San Francisco", meal: "Breakfast sandwich", cuisine: "Cafe" },
  { restaurant: "Philz Coffee", city: "San Francisco", meal: "Bagel with cream cheese", cuisine: "Cafe" },
  { restaurant: "Din Tai Fung", city: "San Jose", meal: "Xiao long bao (soup dumplings)", cuisine: "Chinese" },
  { restaurant: "Din Tai Fung", city: "San Jose", meal: "Pork chop fried rice", cuisine: "Chinese" },
  { restaurant: "Ike's Love & Sandwiches", city: "San Jose", meal: "Meatball sandwich", cuisine: "Sandwiches" },
  { restaurant: "Ike's Love & Sandwiches", city: "San Jose", meal: "Vegan sandwich", cuisine: "Sandwiches" },
  { restaurant: "Burma Superstar", city: "San Francisco", meal: "Tea leaf salad", cuisine: "Burmese" },
  { restaurant: "Burma Superstar", city: "San Francisco", meal: "Rainbow salad", cuisine: "Burmese" },
  { restaurant: "Burma Superstar", city: "San Francisco", meal: "Chicken curry", cuisine: "Burmese" },
  { restaurant: "Marugame Udon", city: "San Francisco", meal: "Niku Udon", cuisine: "Japanese" },
  { restaurant: "Marugame Udon", city: "San Francisco", meal: "Curry Udon", cuisine: "Japanese" },
  { restaurant: "Marugame Udon", city: "San Francisco", meal: "Kake Udon", cuisine: "Japanese" },
  { restaurant: "La Taqueria", city: "San Francisco", meal: "Carne asada burrito", cuisine: "Mexican" },
  { restaurant: "La Taqueria", city: "San Francisco", meal: "Carnitas burrito", cuisine: "Mexican" },
  { restaurant: "La Taqueria", city: "San Francisco", meal: "Super quesadilla", cuisine: "Mexican" },
  { restaurant: "Dumpling Time", city: "San Francisco", meal: "Pork soup dumplings", cuisine: "Chinese" },
];
