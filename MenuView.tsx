import * as React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import {
  BigButton,
  FlexFill,
  LabelText,
  LctView,
  TitleText,
} from "./Shared";

interface MenuItemViewProps {
  item: FoodItem;
  onPress: (item: FoodItem) => void;
}
function MenuItemView({ item, onPress }: MenuItemViewProps) {
  return (
    <View style={styles.horzContainer}>
      <LabelText key={item.id}>{item.name}</LabelText>
      <FlexFill />
      <Button title="+" onPress={() => onPress(item)} />
    </View>
  );
}

interface MenuViewProps {
  menu: Menu;
  onAddToBag: (item: FoodItem) => void;
}

export default function MenuView({
  menu,
  onAddToBag,
}: MenuViewProps) {
  const handleAddItem = (item: FoodItem) => {
    onAddToBag(item);
  };

  return (
    <LctView style={styles.menuView}>
      <TitleText>Menu</TitleText>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {menu.items.map((item) => (
          <View key={item.id} style={styles.menuHorzView}>
            <View style={styles.menuItemDetails}>
              <LabelText>{item.name}</LabelText>
              <Text style={styles.text}>
                calories: {item.calories}
              </Text>
              <Text style={styles.text}>price: ${item.price}</Text>
            </View>
            <FlexFill />
            <BigButton
              style={styles.addButton}
              title="+"
              onPress={() => handleAddItem(item)}
            />
          </View>
        ))}
      </ScrollView>
    </LctView>
  );
}
