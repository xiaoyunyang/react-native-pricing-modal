
import { View } from "react-native";
import { StyleSheet } from "react-native";

export const Row = ({ children }) => {
  return (
    <View style={styles.row}>
      {children}
    </View>

  )
}

const styles = StyleSheet.create({
   row: {
    flex: 1,
    flexDirection: 'row',
  },
})