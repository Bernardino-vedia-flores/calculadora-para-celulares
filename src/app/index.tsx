import { View } from 'react-native';

import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/theme';
import { useCalculator } from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/global-styles';

const CalculatorApp = () => {
  const {
    formula,
    subResult,
    clean,
    deleteLast,
    toggleSign,
    buildNumber,
    setOperator,
    calculate,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">{subResult}</ThemeText>
      </View>

      {/* Fila: C +/- del ÷ */}
      <View style={globalStyles.row}>
        <CalculatorButton label="C" color={Colors.lightGray} blackText onPress={clean} />
        <CalculatorButton label="+/-" color={Colors.lightGray} blackText onPress={toggleSign} />
        <CalculatorButton label="del" color={Colors.lightGray} blackText onPress={deleteLast} />
        <CalculatorButton label="÷" color={Colors.orange} onPress={() => setOperator('÷')} />
      </View>

      {/* Fila: 7 8 9 x */}
      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => buildNumber('7')} />
        <CalculatorButton label="8" onPress={() => buildNumber('8')} />
        <CalculatorButton label="9" onPress={() => buildNumber('9')} />
        <CalculatorButton label="x" color={Colors.orange} onPress={() => setOperator('x')} />
      </View>

      {/* Fila: 4 5 6 - */}
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => buildNumber('4')} />
        <CalculatorButton label="5" onPress={() => buildNumber('5')} />
        <CalculatorButton label="6" onPress={() => buildNumber('6')} />
        <CalculatorButton label="-" color={Colors.orange} onPress={() => setOperator('-')} />
      </View>

      {/* Fila: 1 2 3 + */}
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => buildNumber('1')} />
        <CalculatorButton label="2" onPress={() => buildNumber('2')} />
        <CalculatorButton label="3" onPress={() => buildNumber('3')} />
        <CalculatorButton label="+" color={Colors.orange} onPress={() => setOperator('+')} />
      </View>

      {/* Fila: 0 . = */}
      <View style={globalStyles.row}>
        <CalculatorButton label="0" doubleSize onPress={() => buildNumber('0')} />
        <CalculatorButton label="." onPress={() => buildNumber('.')} />
        <CalculatorButton label="=" color={Colors.orange} onPress={calculate} />
      </View>
    </View>
  );
};

export default CalculatorApp;

