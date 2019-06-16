import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Repositories extends Component {
    render() {
        return (
            <View
                style={styles.projectsScreenStyle}>
                <Text>Project Component is empty now</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    projectsScreenStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});