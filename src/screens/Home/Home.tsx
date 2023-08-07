import {View} from 'react-native';
import React, {useState} from 'react';
import {storage} from '../../../App';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Wave} from './components/Wave/Wave';
import {Target} from './components/Target/Target';
import AddWater from './components/AddWater/AddWater';
import {WaterIndicatorWrapper, WaveWrapper} from './Home.styles';
import {WaterIndicator} from './components/WaterIndicator/WaterIndicator';

export const Home = () => {
  const water = storage.getString('waterML');
  const [currentWater, setCurrentWater] = useState(
    storage.getString('currentWater') ? storage.getString('currentWater') : '0',
  );

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
      <SafeAreaView style={{width: '100%', height: '100%'}}>
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Target
            water={!currentWater ? '0' : currentWater}
            fullWater={water ? water : '1800'}
          />
          <AddWater
            setWater={setCurrentWater}
            water={currentWater === undefined ? '0' : currentWater}
          />
        </View>
        <WaterIndicatorWrapper>
          <WaterIndicator />
        </WaterIndicatorWrapper>
        <WaveWrapper>
          <Wave />
        </WaveWrapper>
      </SafeAreaView>
    </View>
  );
};
