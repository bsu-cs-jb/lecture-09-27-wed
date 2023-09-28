interface Menu {
  items: FoodItem[];
}
interface FoodItem {
  id: string;
  name: string;
  description: string;
  calories: number;
  price: number;
  labels: string[];
  allergens: string[];
}

interface Bag {
  items: BagItem[];
}
interface BagItem {
  id: string;
  foodItemId: string;
  name: string;
  unitPrice: number;
  quantity: number;
}
