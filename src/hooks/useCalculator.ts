import {
    buildNumber,
    calculate,
    deleteLast,
    getFormula,
    getSubResult,
    initialState,
    percent,
    setOperator,
    toggleSign,
    type CalculatorState,
    type Operator,
} from '@/lib/calculator-logic';
import { useState } from 'react';

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(initialState);

  return {
    // Props para la pantalla
    formula: getFormula(state),
    subResult: getSubResult(state) ?? '',

    // Métodos
    clean: () => setState(initialState),
    deleteLast: () => setState((s) => deleteLast(s)),
    toggleSign: () => setState((s) => toggleSign(s)),
    percent: () => setState((s) => percent(s)),
    buildNumber: (digit: string) => setState((s) => buildNumber(s, digit)),
    setOperator: (op: Operator) => setState((s) => setOperator(s, op)),
    calculate: () => setState((s) => calculate(s)),
  };
};