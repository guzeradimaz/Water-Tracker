import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  IPickerConstant,
  generateConstants,
} from '../../../utils/generateConstants';

interface ICounter {
  type: string;
  selection: string;
  setSelection: (arg0: string) => void;
}
export const Counter = ({type, selection, setSelection}: ICounter) => {
  const [selections, setSelections] = useState<IPickerConstant[]>([]);
  useEffect(() => {
    generateConstants({setState: setSelections, type: type});
  }, []);
  return (
    <Picker
      selectedValue={selection}
      onValueChange={value => setSelection(value)}
      selectionColor={'#5199FF50'}
      style={{
        marginVertical: 0,
        width: 200,
      }}>
      <Picker.Item label={type} value="Unknown" />
      {selections.map(i => (
        <Picker.Item key={`id-${i.value}`} label={i.label} value={i.value} />
      ))}
    </Picker>
  );
};
