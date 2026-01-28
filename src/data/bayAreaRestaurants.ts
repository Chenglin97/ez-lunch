export type BayAreaRestaurant = {
  restaurant: string;
  city: string;
  lat: number;
  lng: number;
};

// Seed geocoded locations (approx). We'll expand as we add meals.
export const BAY_AREA_RESTAURANTS: BayAreaRestaurant[] = [
  { restaurant: "Souvla", city: "San Francisco", lat: 37.775, lng: -122.421 },
  { restaurant: "The Bird", city: "San Francisco", lat: 37.776, lng: -122.423 },
  { restaurant: "Mendocino Farms", city: "San Francisco", lat: 37.786, lng: -122.404 },
  { restaurant: "Sweetgreen", city: "San Francisco", lat: 37.788, lng: -122.399 },
  { restaurant: "Daeho Kalbijjim & Beef Soup", city: "San Francisco", lat: 37.785, lng: -122.431 },
  { restaurant: "Ramen Nagi", city: "Palo Alto", lat: 37.444, lng: -122.161 },
  { restaurant: "Gott's Roadside", city: "Palo Alto", lat: 37.445, lng: -122.161 },
  { restaurant: "Din Tai Fung", city: "San Jose", lat: 37.324, lng: -121.946 },
  { restaurant: "Cheeseboard Pizza", city: "Berkeley", lat: 37.879, lng: -122.269 },
  { restaurant: "Homeroom", city: "Oakland", lat: 37.833, lng: -122.253 },
  { restaurant: "La Taqueria", city: "San Francisco", lat: 37.750, lng: -122.418 },
  { restaurant: "Zareen's", city: "Palo Alto", lat: 37.442, lng: -122.163 },
  { restaurant: "Tartine Bakery", city: "San Francisco", lat: 37.761, lng: -122.424 },
  { restaurant: "Boudin", city: "San Francisco", lat: 37.808, lng: -122.414 },
  { restaurant: "Super Duper Burgers", city: "San Francisco", lat: 37.789, lng: -122.401 },
  { restaurant: "Taqueria El Farolito", city: "San Francisco", lat: 37.752, lng: -122.418 },
  { restaurant: "DishDash", city: "Sunnyvale", lat: 37.368, lng: -122.036 },
  { restaurant: "Starbird", city: "Sunnyvale", lat: 37.368, lng: -122.036 },
  { restaurant: "Little Lucca", city: "South San Francisco", lat: 37.655, lng: -122.407 },
  { restaurant: "Marugame Udon", city: "San Francisco", lat: 37.784, lng: -122.407 },
  { restaurant: "Dumpling Time", city: "San Francisco", lat: 37.781, lng: -122.396 },
  { restaurant: "Top Dog", city: "Berkeley", lat: 37.870, lng: -122.268 },
  { restaurant: "Tacos Oscar", city: "Oakland", lat: 37.837, lng: -122.263 },
];
