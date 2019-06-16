import React from 'react';
import { Text, View } from 'react-native';
import { Card } from './common';
import Moment from 'moment';

const RepoDetails = ({ repoEntry }) => {
    const { name, description, language, license, updated_at } = repoEntry;
    const {
        repoContentStyle,
        repoDescriptionStyle,
        repoNameStyle,
        repoSubContentStyle
    } = styles;

    Moment.locale('en');
    var date = updated_at;

    return (
        <Card>
            <View style={repoContentStyle}>
                <Text style={repoNameStyle}>{name}</Text>
                <Text style={repoDescriptionStyle}>{description}</Text>
                <View style={repoSubContentStyle}>
                    <Text>{language}</Text>
                    <Text>{license == null ? " " : repoEntry.license.spdx_id}</Text>
                    <Text>Updated on {Moment(date).format('MMM DD YYYY')}</Text>
                </View>
            </View>
        </Card>
    );
};

const styles = {
    repoContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    repoNameStyle: {
        fontWeight: "bold",
        color: 'black'
    },
    repoDescriptionStyle: {
        padding: 10
    },
    repoSubContentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
};

export default RepoDetails;
