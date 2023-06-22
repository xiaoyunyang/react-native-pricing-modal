import { StyleSheet, View, Pressable, Text, Dimensions } from 'react-native';
import { TEXT_TERTIARY, BLACK, PADDING } from './shared/theme';

export default function Button({ label }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: Dimensions.get('window').width - PADDING * 4,
    height: 47,
    backgroundColor: TEXT_TERTIARY,
    fontWeight: 'bold',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius : 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: BLACK,
    fontSize: 16,
  },
});
