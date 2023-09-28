import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenUnpressed: {
    backgroundColor: "#DDE",
    borderRadius: 8,
    padding: 6,
    width: "100%",
  },
  screenPressed: {
    backgroundColor: "#BBE",
    borderRadius: 8,
    padding: 6,
    width: "100%",
  },
  addButton: {
    flexDirection: "row",
    width: 50,
    height: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  menuItemDetails: {
    alignContent: "flex-start",
  },
  bigButtonUnpressed: {
    backgroundColor: "#87C9CC",
    borderRadius: 8,
    padding: 6,
  },
  bigButtonPressed: {
    backgroundColor: "#85DEFF",
    borderRadius: 8,
    padding: 6,
  },
  flexFill: {
    flex: 1,
  },
  input: {
    fontSize: 18,
    flex: 1,
    borderWidth: 1,
    padding: 7,
  },
  scrollView: {
    flex: 1,
    width: "100%",
    borderWidth: 1,
  },
  scrollViewContent: {
    gap: 10,
    width: "100%",
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subTitleText: {
    fontSize: 26,
  },
  labelText: {
    fontSize: 22,
  },
  text: {
    fontSize: 16,
  },
  horzContainer: {
    flexDirection: "row",
    gap: 10,
  },
  menuHorzView: {
    flexDirection: "row",
    gap: 0,
    justifyContent: "center",
  },
  topLevelContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingBottom: 20,
  },
  avoidingView: {
    flex: 1,
  },
  menuView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#cde",
    borderWidth: 2,
    borderColor: "#999",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 5,
  },
  bagView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#dfd",
    borderWidth: 2,
    borderColor: "#999",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 5,
  },
  bagItemView: {
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
    alignContent: "center",
  },
  quantityButton: {
    flexDirection: "row",
    width: 30,
    height: 40,
    alignContent: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 5,
  },
  stackContainer: {
    flex: 1,
    width: "100%",
    padding: 10,
    gap: 5,
  },
  formContainer: {
    flexDirection: "column",
    gap: 10,
    flexWrap: "wrap",
  },
  formRow: {
    width: "100%",
    flexDirection: "row",
  },
  formColumn: {
    flex: 0.5,
  },
});

export default styles;
