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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
