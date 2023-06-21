import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PricingModal } from './components/PricingModal';

export default function App() {
  return (
    <View style={styles.container}>
      <PricingModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
