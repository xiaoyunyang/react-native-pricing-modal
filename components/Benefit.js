import { StyleSheet, Text, View } from 'react-native';
import { PADDING, SECONDARY, TEXT_PRIMARY, TEXT_SECONDARY } from './shared/theme';

export const Benefit = ({ icon, name, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY,
    padding: PADDING
  },
  name: {
    fontWeight: "bold",
    color: TEXT_PRIMARY,
  },
  description: {
    color: TEXT_SECONDARY
  }
})
