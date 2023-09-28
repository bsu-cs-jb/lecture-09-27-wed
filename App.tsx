import * as React from "react";
import { SafeAreaView, View } from "react-native";
import styles from "./styles";
import { TitleText } from "./Shared";
import MenuView from "./MenuView";
import BagView from "./BagView";
import { genid } from "./utils";

/**
 * Food ordering
 * - menu
 * - entree
 * - add-ons
 * - drink
 * - dessert
 * - items have cost
 * - total amount
 * - tax
 * - tip
 * - calorie counts
 */

const MENU = {
  items: [
    {
      id: genid(),
      name: "Cheeseburger",
      description: "The best Cheeseburger ever made.",
      calories: 870,
      price: 6.99,
      labels: [],
      allergens: ["wheat", "eggs"],
    },
    {
      id: genid(),
      name: "Hamburger",
      description: "A hamburger",
      calories: 770,
      price: 5.99,
      labels: [],
      allergens: ["wheat", "eggs"],
    },
    {
      id: genid(),
      name: "Fries",
      description: "'Freedom' fries",
      calories: 230,
      price: 2.99,
      labels: ["vegetarian"],
      allergens: ["gluten", "peanuts"],
    },
    {
      id: genid(),
      name: "Donuts",
      description: "Dunkin'",
      calories: 430,
      price: 3.99,
      labels: ["vegetarian"],
      allergens: ["wheat", "peanuts"],
    },
    {
      id: genid(),
      name: "Soda",
      description: "More calories than anyone needs",
      calories: 250,
      price: 2.99,
      labels: ["vegetarian", "vegan"],
      allergens: [],
    },
  ],
};

function findFoodItemIndex(
  foodItemId: string,
  bag: BagItem[],
): number {
  return bag.findIndex(
    (bagItem) => bagItem.foodItemId === foodItemId,
  );
}

function addFoodToBag(food: FoodItem, bag: Bag): Bag {
  const foodItemIndex = findFoodItemIndex(food.id, bag.items);
  if (foodItemIndex == -1) {
    return {
      items: [
        ...bag.items,
        {
          id: genid(),
          foodItemId: food.id,
          name: food.name,
          unitPrice: food.price,
          quantity: 1,
        },
      ],
    };
  } else {
    const updatedBagItems = [...bag.items];
    updatedBagItems[foodItemIndex].quantity += 1;
    return {
      items: updatedBagItems,
    };
  }
}

export default function App() {
  const [menu, setMenu] = React.useState<Menu>({ items: [] });
  const [bag, setBag] = React.useState<Bag>({ items: [] });

  React.useEffect(() => {
    // fetch menu from server
    setMenu(MENU);
  }, []);

  const handleAddItem = (item: FoodItem) => {
    // add item to bag
    setBag(addFoodToBag(item, bag));
  };

  const handleDecrementBagItem = (item: BagItem) => {
    const bagItemIndex = bag.items.findIndex(
      (bagItem) => bagItem.id == item.id,
    );
    const updatedBag = { items: [...bag.items] };
    updatedBag.items[bagItemIndex].quantity -= 1;
    if (updatedBag.items[bagItemIndex].quantity <= 0) {
      updatedBag.items.splice(bagItemIndex, 1);
    }
    setBag(updatedBag);
  };

  const handleIncrementBagItem = (item: BagItem) => {
    const bagItemIndex = bag.items.findIndex(
      (bagItem) => bagItem.id == item.id,
    );
    const updatedBag = { items: [...bag.items] };
    updatedBag.items[bagItemIndex].quantity += 1;
    setBag(updatedBag);
  };

  return (
    <SafeAreaView style={styles.topLevelContainer}>
      <View style={styles.container}>
        <TitleText>Wed 9/27</TitleText>
        <MenuView menu={menu} onAddToBag={handleAddItem} />
        <View style={{ height: 20 }} />
        <BagView
          bag={bag}
          menu={menu}
          onDecrement={handleDecrementBagItem}
          onIncrement={handleIncrementBagItem}
        />
      </View>
    </SafeAreaView>
  );
}
