import { StyleSheet } from "react-native";

export default StyleSheet.create({
  categoryWrapper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
    gap: 5,
  },
  categoryTitle: {
    fontWeight: "600",
    fontSize: 16,
  },

  exerciseWrapper: {
    flex: 1,
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    textAlign: "center",
    alignItems: "center",

    // shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,

    // shadow for Android
    elevation: 5,
  },
  exerciseImg: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },
  exerciseText: {
    paddingTop: 10,
    textAlign: "center",
  },
});
