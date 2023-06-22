import {
  StyleSheet,
  View,
} from "react-native";
import { BASE_UNIT } from "./theme";

// https://www.codedaily.io/tutorials/Build-an-Animated-Page-Indicator-using-Animated-Dynamic-Value-Tracking-in-React-Native
export const PageIndicator = ({ totalPages, currPage }) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flexDirection: "row",
  },
  circle: {
    width: BASE_UNIT * 4,
    height: BASE_UNIT * 4,
    backgroundColor: "#ddd",
    borderRadius: 20,
    marginRight: 4,
    overflow: "hidden",
  },
  mover: {
    position: "absolute",
    top: 0,
    left: 0,
    width: BASE_UNIT * 4,
    height: 40,
    borderRadius: 20,
    backgroundColor: "tomato",
  },
});