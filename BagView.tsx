import * as React from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import { BigButton, FlexFill, LabelText, TitleText } from "./Shared";

function findMenuItem(foodItemId: string, menu: Menu) {
  return menu.items.find((item) => item.id == foodItemId);
}

interface BagViewProps {
  menu: Menu;
  bag: Bag;
  onIncrement: (item: BagItem) => void;
  onDecrement: (item: BagItem) => void;
}

export default function BagView({
  bag,
  menu,
  onIncrement,
  onDecrement,
}: BagViewProps) {
  return (
    <View style={styles.bagView}>
      <TitleText>Bag</TitleText>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {bag.items.map((item) => (
          <View key={item.id} style={styles.bagItemView}>
            <LabelText>{item.name}</LabelText>
            <FlexFill />
            <BigButton
              style={styles.quantityButton}
              title="-"
              onPress={() => onDecrement(item)}
            />
            <LabelText>{item.quantity}</LabelText>
            <BigButton
              style={styles.quantityButton}
              title="+"
              onPress={() => onIncrement(item)}
            />
          </View>
        ))}
      </ScrollView>
      <LabelText>
        Calories:{" "}
        {bag.items
          .reduce(
            (total: number, item: BagItem) =>
              total +
              (findMenuItem(item.foodItemId, menu)?.calories || 0) *
                item.quantity,
            0,
          )
          .toLocaleString()}
      </LabelText>
      <LabelText>
        Total: $
        {bag.items
          .reduce(
            (total: number, item: BagItem) =>
              total + item.unitPrice * item.quantity,
            0,
          )
          .toFixed(2)}
      </LabelText>
    </View>
  );
}
