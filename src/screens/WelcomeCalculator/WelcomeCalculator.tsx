import React, {useEffect, useState} from 'react';
import {
  WelcomeCalculatorContainer,
  WelcomeCalculatorText,
} from './WelcomeCalculator.styles';
import {Counter} from './components/Counter';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../../components/Button/Button';
import {storage} from '../../../App';

export const WelcomeCalculator = ({navigation}) => {
  const [heightSelection, setHeightSelection] = useState('Unknown');
  const [weightSelection, setWeightSelection] = useState('Unknown');

  useEffect(() => {
    if (storage.getString('waterML') != '') {
      navigation.navigate('Home');
    }
  }, []);
  const handleNext = () => {
    if (heightSelection === 'Unknown' || weightSelection === 'Unknown') return;
    const waterML =
      Math.ceil(
        Math.round(+weightSelection * 30 * (+heightSelection / 200) + 0.5) / 5,
      ) * 5;
    storage.set('waterML', waterML.toString());
    navigation.navigate('Home');
  };

  const handleSkip = () => {
    storage.set('waterML', '1800');
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView>
      <WelcomeCalculatorContainer>
        <WelcomeCalculatorText>
          Youre welcome to Water Tracker!
        </WelcomeCalculatorText>
        <WelcomeCalculatorText>
          To track necessary ml of water per day, we need some info about you
        </WelcomeCalculatorText>
        <WelcomeCalculatorText>
          Personalized hydration for enchaned Well-being based on height and
          weight
        </WelcomeCalculatorText>
        <Counter
          type="height"
          selection={heightSelection}
          setSelection={setHeightSelection}
        />
        <Counter
          type="weight"
          selection={weightSelection}
          setSelection={setWeightSelection}
        />
        <Button primary={true} label="next" onPress={handleNext} />
        <Button label="skip" onPress={handleSkip} />
      </WelcomeCalculatorContainer>
    </SafeAreaView>
  );
};
