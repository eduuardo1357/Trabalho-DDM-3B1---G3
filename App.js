import React from "react";
import { Text, View } from 'react-native';
import styles from "./style";

export default function Title() {
  return (
    <View style={styles.BoxTitle}>
      <Text style={styles.texTitle}>DDDM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
