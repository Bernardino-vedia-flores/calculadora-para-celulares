import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';
import { Pressable, Text } from 'react-native';

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSize?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        globalStyles.button,
        { backgroundColor: color, opacity: pressed ? 0.8 : 1 },
        doubleSize && { width: 180 },
      ]}
    >
      <Text
        style={[globalStyles.buttonText, blackText && { color: 'black' }]}
        adjustsFontSizeToFit
        numberOfLines={1}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;