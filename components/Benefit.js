import { StyleSheet, Text, View } from 'react-native';

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
    backgroundColor: 'green',
    flex: 1,
    padding: 20
  },
  name: {
    fontWeight: 'bold',
    color: "#FFFFFF",
  },
  description: {
    color: 'white'
  }
})
