import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Repositories extends Component {

    render() {
        return (
            <View
                style={styles.followingScreenStyle}>
                <Text>Following Component is empty now</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    followingScreenStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});