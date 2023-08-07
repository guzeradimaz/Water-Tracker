import styled from "styled-components/native";

export const ButtonTouchableOpacity = styled.TouchableOpacity<{ $primary?: boolean; }>`
  backgroundColor: ${props => props.$primary ? "#5199FF60" : "transparent"};
  paddingVertical: 12px;
  paddingHorizontal: 70px;
  borderRadius: 8px;
  alignItems: center;
  justifyContent:center;
`
export const ButtonText = styled.Text`
  color: #404040;
  fontSize: 16px;
  textTransform: uppercase;
`