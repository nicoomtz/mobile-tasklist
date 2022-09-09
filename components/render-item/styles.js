import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginVertical: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#9F84BD",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  item: {
    fontSize: 16,
    color: "#000",
  },
  delete: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
