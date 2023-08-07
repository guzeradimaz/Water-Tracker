import {ScrollView} from 'react-native';
import React from 'react';
import {SvgCssUri} from 'react-native-svg';
import {AddWaterBtn, AddWaterTxt, AddWaterWrapper} from './AddWater.styles';
import {watersToAdd} from '../../../../constants/constants';
import {storage} from '../../../../../App';

interface IAddWater {
  setWater: (arg0: string) => void;
  water: string;
}
const AddWater = ({water, setWater}: IAddWater) => {
  const addWater = (item: number) => {
    const newWater = (+water + item).toString();
    setWater(newWater);
    storage.set('currentWater', newWater);
  };

  return (
    <AddWaterWrapper>
      <SvgCssUri
        width="80"
        height="80"
        style={{marginLeft: 10}}
        uri="https://www.svgrepo.com/show/227400/glass-of-water-liquid.svg"
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: '#b5b5b5',
          height: 40,
        }}>
        {watersToAdd.map(i => (
          <AddWaterBtn key={'id-' + i.value} onPress={() => addWater(i.value)}>
            <AddWaterTxt>{i.label}</AddWaterTxt>
          </AddWaterBtn>
        ))}
      </ScrollView>
    </AddWaterWrapper>
  );
};

export default AddWater;
