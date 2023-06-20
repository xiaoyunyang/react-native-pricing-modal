import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DEFAULT_TIERS, TIERS, TIER_INFO } from '../constants/tiers';

import { TierAbout } from './TierAbout';

const { width } = Dimensions.get('window');

// Want https://github.com/dohooo/react-native-reanimated-carousel/blob/HEAD/exampleExpo/src/pages/parallax/index.tsx
export const TierCarousel = ({ tiers = DEFAULT_TIERS }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        style={{ width: width }}
      >
        {/* {tiers.map(tier => {
          return <TierAbout tier={tier} />
        })} */}
          <View style={{ backgroundColor: "blue", flex: 1, width: width }}></View>
          <View style={{ backgroundColor: "yellow", flex: 1, width: width }}></View>
        <View style={{ backgroundColor: "green", flex: 2, width: width }}></View>
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})