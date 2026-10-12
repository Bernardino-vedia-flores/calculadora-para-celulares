export type Operator = '+' | '-' | 'x' | '÷';

export interface CalculatorState {
  number: string;
  prevNumber: string;
  operator?: Operator;
}

export const initialState: CalculatorState = {
  number: '0',
  prevNumber: '0',
  operator: undefined,
};

const MAX_DIGITS = 12;

/** Resultado de aplicar un operador; null si la operación no es válida (ej. dividir entre 0). */
export const operate = (a: number, b: number, op: Operator): number | null => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '÷':
      return b === 0 ? null : a / b;
  }
};

/** Evita errores de punto flotante (0.1 + 0.2) y devuelve texto. */
export const format = (value: number): string => {
  return parseFloat(value.toPrecision(12)).toString();
};

/** Resultado en vivo de prevNumber <operator> number, o null si no aplica. */
export const getSubResult = (state: CalculatorState): string | null => {
  if (!state.operator) return null;
  const result = operate(Number(state.prevNumber), Number(state.number), state.operator);
  return result === null ? null : format(result);
};

export const getFormula = (state: CalculatorState): string => {
  if (!state.operator) return state.number;
  return `${state.prevNumber} ${state.operator} ${state.number}`;
};

export const buildNumber = (state: CalculatorState, digit: string): CalculatorState => {
  const { number } = state;

  if (digit === '.' && number.includes('.')) return state;

  const digitsCount = number.replace(/[-.]/g, '').length;
  if (digit !== '.' && digitsCount >= MAX_DIGITS) return state;

  if (number === '0' || number === '-0') {
    if (digit === '.') return { ...state, number: number + '.' };
    if (digit === '0') return state;
    return { ...state, number: number === '-0' ? '-' + digit : digit };
  }

  return { ...state, number: number + digit };
};

export const deleteLast = (state: CalculatorState): CalculatorState => {
  const { number } = state;
  if (number.length === 1 || (number.length === 2 && number.startsWith('-'))) {
    return { ...state, number: '0' };
  }
  return { ...state, number: number.slice(0, -1) };
};

export const toggleSign = (state: CalculatorState): CalculatorState => {
  const { number } = state;
  return { ...state, number: number.startsWith('-') ? number.slice(1) : '-' + number };
};

export const percent = (state: CalculatorState): CalculatorState => {
  return { ...state, number: format(Number(state.number) / 100) };
};

export const setOperator = (state: CalculatorState, op: Operator): CalculatorState => {
  // Si ya había una operación pendiente y el usuario escribió un número, se resuelve primero.
  const pending = getSubResult(state);
  if (state.operator && pending !== null && state.number !== '0') {
    return { number: '0', prevNumber: pending, operator: op };
  }
  // Si solo cambia de operador sin escribir otro número, se reemplaza el operador.
  if (state.operator && state.number === '0') {
    return { ...state, operator: op };
  }
  return { number: '0', prevNumber: state.number, operator: op };
};

export const calculate = (state: CalculatorState): CalculatorState => {
  if (!state.operator) return state;
  const result = getSubResult(state);
  if (result === null) return { ...initialState }; // división entre cero: reinicia
  return { number: result, prevNumber: '0', operator: undefined };
};