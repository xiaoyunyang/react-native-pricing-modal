import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { TIER_GROUPS } from '../constants/tiers';
import { TierGroup } from './TierGroup';
import { PageIndicator } from './shared/Carousel';
import { useState } from 'react';


const { width } = Dimensions.get('window');

// Carousel implementation idea
// https://blog.logicwind.com/carousel-using-react-native-scrollview/
export const TierCarousel = ({ tierGroups = TIER_GROUPS }) => {
  const [currPage, setCurrPage] = useState(0)
  const handlePageChange = (e) => {
    const { contentOffset } = e.nativeEvent;
    if (contentOffset) {
      const page = Math.round(contentOffset.x / width);
      setCurrPage(page)
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ width: width }}
        onScroll={handlePageChange}
        // This controls how often the scroll event will be fired while scrolling (as a time interval in ms)
        // If you do not need precise scroll position tracking, set this value higher to limit the information
        // being sent across the bridge.
        // The default value is 0, which results in the scroll event being sent only once each time the view is scrolled.
        scrollEventThrottle={16}
      >
        {
          tierGroups.map((tierGroup, i) => <TierGroup key={i}  tiers={tierGroup} />)
        }
      </ScrollView>
      <PageIndicator totalPages={tierGroups.length} currPage={currPage} />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})