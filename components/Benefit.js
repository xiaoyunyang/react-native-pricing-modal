import { StyleSheet, Text, View } from 'react-native';
import { PADDING, SECONDARY, TEXT_PRIMARY, TEXT_SECONDARY } from './shared/theme';

const BoldAndBeautiful = () => {
  return (
    <Text style={styles.baseText}>
      I am bold
      <Text style={styles.innerText}> and red</Text>
    </Text>
  );
};
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
    flex: 1,
    padding: PADDING
  },
  name: {
    fontWeight: 'bold',
    color: TEXT_PRIMARY,
  },
  description: {
    color: TEXT_SECONDARY
  }
})
