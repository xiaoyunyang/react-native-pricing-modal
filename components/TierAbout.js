import { StyleSheet, Text, View } from 'react-native';

export const TierAbout = ({ tier }) => {
  console.log("tier", tier)
  return (
    <View style={styles.container}>
      <Text>Tier info goes here</Text>
      <Text>{tier.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 300,
    backgroundColor: 'blue',
  }
})