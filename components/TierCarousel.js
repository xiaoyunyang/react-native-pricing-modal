import { Dimensions, StyleSheet, View } from 'react-native';
import { TIER_GROUPS } from '../constants/tiers';
import { TierGroup } from './TierGroup';
import { Carousel } from './shared/Carousel';
import { useState } from 'react';
import { PADDING } from './shared/theme';


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
      <Carousel
        handlePageChange={handlePageChange}
        totalPages={tierGroups.length}
        currPage={currPage}
      >
        {
          tierGroups.map((tierGroup, i) => (
            <View style={styles.carouselItem}>
              <TierGroup key={i}  tiers={tierGroup} />
            </View>
          ))
        }
      </Carousel>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  carouselItem: {
    width: width,
    padding: PADDING,
  }
})