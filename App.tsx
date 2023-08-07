import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes/routes';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};
