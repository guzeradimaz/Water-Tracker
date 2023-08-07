import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {ActiveTxt, SimpleTxt, TargetWrapper} from './Target.styles';

interface ITarget {
  water: string;
  fullWater: string;
}
export const Target = ({water, fullWater}: ITarget) => {
  return (
    <TargetWrapper>
      <ActiveTxt>{water}</ActiveTxt>
      <SimpleTxt>
        {' '}
        / {fullWater} {'ml'}
      </SimpleTxt>
    </TargetWrapper>
  );
};

const styles = StyleSheet.create({});
