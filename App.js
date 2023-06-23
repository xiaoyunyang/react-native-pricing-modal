import { StyleSheet } from 'react-native';
import { PricingModal } from './components/PricingModal';

// https://reactnative.dev/docs/height-and-width
export default function App() {
  return <PricingModal />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
