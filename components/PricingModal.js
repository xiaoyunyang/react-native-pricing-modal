import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Button from "./Button"
import { TierCarousel } from './TierCarousel';
import { TIERS } from '../constants/tiers';
import { PADDING, PRIMARY, TEXT_PRIMARY, TEXT_SECONDARY } from './shared/theme';

const TITLE = "Financial coaching and education in your pocket"
const SUB_TITLE = "Upgrade to get the most out of Parthean"

export const PricingModal = ({ tiers = TIERS}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{TITLE}</Text>
        <Text style={styles.subTitle}>{SUB_TITLE}</Text>
      </View>
      <TierCarousel tiers={tiers} />
      <View style={styles.footerContainer}>
        <Button label="Continue" />
      </View>
    </View>
  )
}

const CLOSE_BUTTON_SIZE = 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: CLOSE_BUTTON_SIZE + PADDING,
    padding: PADDING,
    flexDirection: "column",
    width: Dimensions.get('window').width,
    textAlign: "center"
  },
  title: {
    color: TEXT_PRIMARY,
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 24,
  },
  subTitle: {
    color: TEXT_SECONDARY,
    fontSize: 16,
  },
  footerContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
});
