import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TIERS } from '../constants/tiers';

import { TierAbout } from './TierAbout';

const { width } = Dimensions.get('window');

// Carousel implementation idea
// https://blog.logicwind.com/carousel-using-react-native-scrollview/
export const TierCarousel = ({ tiers = TIERS }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        style={{ width: width }}
      >
        {tiers.map((tier) => {
          return <TierAbout key={tier.id} {...tier} />
        })}
          {/* <View style={{ backgroundColor: "blue", flex: 1, width: width }}></View>
          <View style={{ backgroundColor: "yellow", flex: 1, width: width }}></View>
        <View style={{ backgroundColor: "green", flex: 1, width: width }}></View> */}
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