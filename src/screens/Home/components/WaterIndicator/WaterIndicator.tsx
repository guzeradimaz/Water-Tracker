import React from 'react';
import {
  WaterIndicatorFilled,
  WaterIndicatorFilledWrapper,
  WaterIndicatorText,
  WaterIndicatorTextWrapper,
} from './WaterIndicator.styles';

export const WaterIndicator = () => {
  return (
    <WaterIndicatorFilledWrapper>
      <WaterIndicatorFilled />
      <WaterIndicatorTextWrapper>
        <WaterIndicatorText>100%</WaterIndicatorText>
        <WaterIndicatorText>50%</WaterIndicatorText>
        <WaterIndicatorText>25%</WaterIndicatorText>
        <WaterIndicatorText>0%</WaterIndicatorText>
      </WaterIndicatorTextWrapper>
    </WaterIndicatorFilledWrapper>
  );
};
