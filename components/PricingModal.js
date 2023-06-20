import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Button from "./Button"
import { TierAbout } from './TierAbout';
import { TierCarousel } from './TierCarousel';
import { TIERS } from '../constants/tiers';

const TITLE = "Financial coaching and education in your pocket"
const SUB_TITLE = "Upgrade to get the most out of Parthean"

export const PricingModal = ({ tiers = TIERS}) => {
  return (
    <View style={styles.container}>
      <Text>{TITLE}</Text>
      <Text>{SUB_TITLE}</Text>
      <TierCarousel tiers={tiers} />
      <View style={styles.footerContainer}>
        <Button label="Continue" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
