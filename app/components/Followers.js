import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Repositories extends Component {
    render() {
        return (
            <View
                style={ styles.followersScreenStyle }>
                <Text>Followers Component is empty now</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    followersScreenStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});