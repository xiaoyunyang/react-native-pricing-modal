import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Button from "./Button"
import { TierCarousel } from './TierCarousel';
import { PADDING, PRIMARY, TEXT_PRIMARY, TEXT_SECONDARY } from './shared/theme';

const TITLE = "Financial coaching and education in your pocket"
const SUB_TITLE = "Upgrade to get the most out of Parthean"

export const PricingModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.close}>
        <Text style={styles.closeIcon}>X</Text>
      </View>
      <View style={styles.modalTitle}>
        <Text style={styles.title}>{TITLE}</Text>
        <Text style={styles.subTitle}>{SUB_TITLE}</Text>
      </View>
      <View style={styles.modalContent}>
        <TierCarousel />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Continue" />
     </View>
    </View>
  );
};

const CLOSE_BUTTON_SIZE = 30;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%"
  },
  close: {
    height: CLOSE_BUTTON_SIZE + PADDING,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: Dimensions.get('window').width,
  },
  closeIcon: {
    color: "white",
    marginTop: CLOSE_BUTTON_SIZE,
    fontSize: 14,
    position: "absolute",
    right: CLOSE_BUTTON_SIZE + PADDING,
  },
  modalTitle: {
    // marginTop: CLOSE_BUTTON_SIZE + PADDING,
    padding: PADDING,
    flexDirection: "column",
    width: Dimensions.get('window').width - (PADDING * 2),
    height: '15%',
  },
  title: {
    color: TEXT_PRIMARY,
    flexWrap: 'wrap',
    fontSize: 24,
    textAlign: "center"
  },
  subTitle: {
    color: TEXT_SECONDARY,
    flexWrap: 'wrap',
    fontSize: 16,
    textAlign: "center"
  },
  modalContent: {
    height: '57%',
  },
  footerContainer: {
    paddingTop: PADDING,
    paddingBottom: PADDING,
    height: "10%",
    alignItems: "center",
  },
});
