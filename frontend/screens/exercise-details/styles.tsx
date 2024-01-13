import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    marginTop: 16,
    fontSize: 16,
  },
  exerciseImage: {
    width: "100%",
    height: 250,
  },
});

export const tabsStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export const tabDescriptionStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
