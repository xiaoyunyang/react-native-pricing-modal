import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Button from "./Button"
import { TierCarousel } from './TierCarousel';
import { TIERS } from '../constants/tiers';

const TITLE = "Financial coaching and education in your pocket"
const SUB_TITLE = "Upgrade to get the most out of Parthean"

export const PricingModal = ({ tiers = TIERS}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{TITLE}</Text>
        <Text>{SUB_TITLE}</Text>
      </View>
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
    flexDirection: "column",
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
});
