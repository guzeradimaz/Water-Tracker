interface IGenerateConstants {
  setState: React.Dispatch<React.SetStateAction<IPickerConstant[]>>;
  type: string;
}

export interface IPickerConstant {
  label: string;
  value: string;
}

export const generateConstants = ({setState, type}: IGenerateConstants) => {
  if (type === 'height') {
    const newHeightConstants = [];
    for (let i = 120; i <= 230; i++) {
      newHeightConstants.push({
        label: `${i}cm`,
        value: `${i}`,
      });
    }
    setState(newHeightConstants);
  } else if (type === 'weight') {
    const newHeightConstants = [];
    for (let i = 35; i <= 160; i++) {
      newHeightConstants.push({
        label: `${i}kg`,
        value: `${i}`,
      });
    }
    setState(newHeightConstants);
  }
};
