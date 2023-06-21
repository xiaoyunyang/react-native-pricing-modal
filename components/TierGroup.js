import { View, Switch } from 'react-native';
import { TierAbout } from './TierAbout';
import { useState } from 'react';

export const TierGroup = ({ tiers }) => {
  const [tierIdx, setTierIdx] = useState(0)
  const selectedTier = tiers[tierIdx]
  const isEnabled = tierIdx === 1
  return (
    <View>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setTierIdx((tierIdx + 1) % tiers.length)}
        value={isEnabled}
      />
      <TierAbout {...selectedTier} />
    </View>
  )
}