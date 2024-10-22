import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Button from './Button';

const { width } = Dimensions.get('window');

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    'C', '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];

  return (
    <View style={styles.calculator}>
      <Text style={styles.input}>{input}</Text>
      <View style={styles.buttonGrid}>
        {buttons.map((btn) => (
          <Button key={btn} value={btn} onClick={handleButtonClick} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e', 
    padding: 20,
    borderRadius: 20,
  },
  input: {
    fontSize: 48,
    marginBottom: 20,
    textAlign: 'right',
    width: width * 0.9,
    padding: 20,
    borderColor: '#4a4a4a',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#282c34', 
    color: '#ffffff', 
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
});

export default Calculator;
