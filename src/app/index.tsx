import { View } from 'react-native';

import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">50 x 500000000000000</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>

      {/* Fila: C +/- del ÷ */}
      <View style={globalStyles.row}>
        <CalculatorButton label="C" color={Colors.lightGray} blackText onPress={() => console.log('C')} />
        <CalculatorButton label="+/-" color={Colors.lightGray} blackText onPress={() => console.log('+/-')} />
        <CalculatorButton label="del" color={Colors.lightGray} blackText onPress={() => console.log('del')} />
        <CalculatorButton label="÷" color={Colors.orange} onPress={() => console.log('÷')} />
      </View>

      {/* Fila: 7 8 9 x */}
      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => console.log('7')} />
        <CalculatorButton label="8" onPress={() => console.log('8')} />
        <CalculatorButton label="9" onPress={() => console.log('9')} />
        <CalculatorButton label="x" color={Colors.orange} onPress={() => console.log('x')} />
      </View>

      {/* Fila: 4 5 6 - */}
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => console.log('4')} />
        <CalculatorButton label="5" onPress={() => console.log('5')} />
        <CalculatorButton label="6" onPress={() => console.log('6')} />
        <CalculatorButton label="-" color={Colors.orange} onPress={() => console.log('-')} />
      </View>

      {/* Fila: 1 2 3 + */}
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => console.log('1')} />
        <CalculatorButton label="2" onPress={() => console.log('2')} />
        <CalculatorButton label="3" onPress={() => console.log('3')} />
        <CalculatorButton label="+" color={Colors.orange} onPress={() => console.log('+')} />
      </View>

      {/* Fila: 0 . = */}
      <View style={globalStyles.row}>
        <CalculatorButton label="0" doubleSize onPress={() => console.log('0')} />
        <CalculatorButton label="." onPress={() => console.log('.')} />
        <CalculatorButton label="=" color={Colors.orange} onPress={() => console.log('=')} />
      </View>
    </View>
  );
};

export default CalculatorApp;