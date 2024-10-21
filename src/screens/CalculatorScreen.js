import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from '../components/Display';
import ButtonRow from '../components/ButtonRow';
import { calculate } from '../utils/calculate';

const CalculatorScreen = () => {
    const [state, setState] = useState({ displayValue: '0' });

    const handlePress = (button) => {
        setState(calculate(state, button));
    };

    return (
        <View style={styles.container}>
            <Display value={state.displayValue} />
            <ButtonRow buttons={[{ text: '1', onPress: () => handlePress('1') }, { text: '2', onPress: () => handlePress('2') }, { text: '3', onPress: () => handlePress('3') }, { text: '+', onPress: () => handlePress('+') }]} />
            <ButtonRow buttons={[{ text: '4', onPress: () => handlePress('4') }, { text: '5', onPress: () => handlePress('5') }, { text: '6', onPress: () => handlePress('6') }, { text: '-', onPress: () => handlePress('-') }]} />
            <ButtonRow buttons={[{ text: '7', onPress: () => handlePress('7') }, { text: '8', onPress: () => handlePress('8') }, { text: '9', onPress: () => handlePress('9') }, { text: '*', onPress: () => handlePress('*') }]} />
            <ButtonRow buttons={[{ text: '0', onPress: () => handlePress('0') }, { text: '=', onPress: () => handlePress('=') }, { text: 'C', onPress: () => handlePress('C') }, { text: '/', onPress: () => handlePress('/') }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
    },
});

export default CalculatorScreen;