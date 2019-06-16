import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Overview extends Component {

    render() {
        return (
            <View
                style={styles.overViewScreenStyle}>
                <Text>Overview Component is empty now and select Repository Tab for repositories details </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    overViewScreenStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

