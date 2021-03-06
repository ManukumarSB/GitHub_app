import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button } from 'react-native';
import { Card } from './common';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as localisationData from '../GlobalStrings.json';

export default class ProfileDetails extends Component {

    render() {
        return (
            <View style={{ flexDirection: this.props.orientaion === 'portrait' ? 'row' : 'column', padding: 5 }}>
                <View style={styles.imageViewStyle}>
                        <Image
                            style={styles.imageStyle}
                            source={{
                                uri: this.props.profileData.avatar_url,
                            }}
                        />
                        <View style={styles.statusEditStyle}>
                            <Icon name="edit" size={15} color="#900" />
                            <Text>{localisationData.profileSetStatusLabel}</Text>
                        </View>
                </View>
                <View style={styles.profileTextArea}>
                    <Text style={styles.userNameStyle}> {this.props.profileData.name}</Text>
                    <Text style> {this.props.profileData.login}</Text>
                    <View style={styles.detailsStyle}>
                        <Icon name="people" size={15} color="#900" />
                        <Text>{this.props.profileData.company}</Text>
                    </View>

                    <View style={styles.detailsStyle}>
                        <Icon name="location-on" size={15} color="#900" />
                        <Text>{this.props.profileData.location}</Text>
                    </View>
                    {/* <View style={styles.detailsStyle}>
                            <Icon name="mail" size={15} color="#900" />
                            <Text>{this.props.profileData.email}</Text>

                        </View> */}
                    <View style={[{ width: "90%" }]}>
                        <Button
                            title={localisationData.profileFollowButtonLabel}
                            color="#03A9F4"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileTextArea: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10,
        height: Dimensions.get('window').width * 0.4,
        width: Dimensions.get('window').width * 0.5,
    },
    imageViewStyle: {
        flex: 3,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'flex-start',
    },
    imageStyle: {
        borderRadius: 100,
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
    },
    statusEditStyle: {
        flexDirection: 'row',
        paddingLeft:20
    },
    userNameStyle: {
        fontSize: 20,
        color: '#000000',
        paddingTop: 5
    },
    detailsStyle: {
        flexDirection: 'row',
        margin: 5
    },
});
