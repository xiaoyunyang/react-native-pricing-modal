import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import { SECONDARY, TEXT_SECONDARY } from "./theme";

const { width } = Dimensions.get('window');

// https://www.codedaily.io/tutorials/Build-an-Animated-Page-Indicator-using-Animated-Dynamic-Value-Tracking-in-React-Native
const PageIndicator = ({ totalPages, currPage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        {Array.from(Array(totalPages).keys()).map((key) => {
          return (
            <View style={styles.circle} key={key}>
              <View style={key===currPage && styles.mover } />
            </View>
          )
        })}
      </View>
    </View>
  )
}


export const Carousel = ({ children, handlePageChange, totalPages, currPage }) => {

  return (
    <>
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
        {children}
      </ScrollView>
      <PageIndicator totalPages={totalPages} currPage={currPage} />
    </>
  )
}

const CIRCLE_WIDTH = 10
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flexDirection: "row",
  },
  circle: {
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
    backgroundColor: SECONDARY,
    borderRadius: 20,
    marginRight: 4,
    overflow: "hidden",
  },
  mover: {
    position: "absolute",
    top: 0,
    left: 0,
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
    borderRadius: 20,
    backgroundColor: TEXT_SECONDARY,
  },
});