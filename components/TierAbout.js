import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Benefit } from './Benefit';
import { TEXT_TERTIARY, PADDING, SECONDARY, TEXT_PRIMARY, TEXT_SECONDARY } from './shared/theme';
import { Row } from './shared/Row';
const { width } = Dimensions.get('window');

export const TierAbout = ({
  name, monthlyPrice, annualPrice, benefits,
  icon
}) => {

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.tierName}>{name}</Text>
        <Row>
            <View>
              <Text style={styles.monthly}>{monthlyPrice}</Text>
          </View>
          <View style={{ paddingLeft: 5 }}>
            {annualPrice && <Text style={styles.annual}>({annualPrice})</Text>}
          </View>
        </Row>
        <View>
          {
            benefits.map((benefit) => <Benefit key={benefit.name} {...benefit} />)
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SECONDARY,
    padding: PADDING
  },
  pricing: {
    flex:1,
    flexDirection: 'row',
  },
  monthly: {
    color: TEXT_PRIMARY,
  },
  annual: {
    color: TEXT_SECONDARY,
  },
  tierName: {
    color: TEXT_TERTIARY,
    fontWeight: 'bold',
  }
})