import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ value }) => (
    <View style={styles.container}>
        <Text style={styles.displayText}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#000',
        padding: 20,
    },
    displayText: {
        fontSize: 60,
        color: '#fff',
    },
});

export default Display;