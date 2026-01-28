export type DietFlags = {
  vegetarian: boolean;
  vegan: boolean;
  pescatarian: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  nutFree: boolean;
};

export type PreferencesDraft = {
  diet: DietFlags;
  likedCuisines: string;
  dislikedCuisines: string;
  dislikedIngredients: string;
  allergies: string;
  maxPrice: string;
  radiusMiles: string;
};
