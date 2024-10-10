import React from "react";
import { Text, View } from 'react-native';
import styles from "./style";

export default function Title() {
  return (
    <View style={styles.BoxTitle}>
      <Text style={styles.texTitle}>Trabalho DDM G3</Text>
    </View>
  );
}
