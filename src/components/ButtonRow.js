import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

const ButtonRow = ({ buttons }) => (
    <View style={styles.row}>
        {buttons.map((button, index) => (
            <Button key={index} {...button} />
        ))}
    </View>
);

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default ButtonRow;