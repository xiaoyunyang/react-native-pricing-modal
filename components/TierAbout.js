import { StyleSheet, Text, View } from 'react-native';

export const TierAbout = ({ tier }) => {
  return (
    <View style={styles.container}>
      <Text>Tier info goes here</Text>
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