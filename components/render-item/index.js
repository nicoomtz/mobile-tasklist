import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const CustomRenderItem = ({ item, onPress }) => {
  return (
    <View key={`item-${item.id}`} style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomRenderItem;
