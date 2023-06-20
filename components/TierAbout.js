import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Benefit } from './Benefit';
import { ACCENT_WHITE, GREEN, WHITE } from '../constants/theme';

const { width } = Dimensions.get('window');

export const TierAbout = ({
  name, monthlyPrice, annualPrice, benefits,
  icon
}) => {

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.tierName}>{name}</Text>
        <View style={designSystemStyles.row}>
            <View>
              <Text style={styles.monthly}>{monthlyPrice}</Text>
          </View>
          <View style={{ paddingLeft: 5 }}>
            {annualPrice && <Text style={styles.annual}>({annualPrice})</Text>}
            </View>
        </View>
        <View>
          {
            benefits.map((benefit) => <Benefit key={benefit.name} {...benefit} />)
          }
        </View>
      </View>
    </View>
  )
}

const designSystemStyles = StyleSheet.create({
   row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#030303",
    width: width,
    flex: 1,
  },
  pricing: {
    paddingBottom: 20,
    flex:1,
    flexDirection: 'row',
  },
  monthly: {
    color: WHITE,
  },
  annual: {
    color: ACCENT_WHITE,
  },
  details: {
    backgroundColor: "#1D1D1D",
    padding: 20
  },
  tierName: {
    color: GREEN,
    fontWeight: 'bold',
  }
})