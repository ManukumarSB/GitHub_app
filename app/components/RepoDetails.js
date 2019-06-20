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
        repoSubContentStyle,
        updateTimeStyle
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
                    <Text style={updateTimeStyle}>Updated on {Moment(date).format('MMM DD YYYY')}</Text>
                </View>
            </View>
        </Card>
    );
};

const styles = {
    repoContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    repoNameStyle: {
        fontWeight: "bold",
        color: 'blue',
        paddingLeft: 5
    },
    repoDescriptionStyle: {
        padding: 10,
    },
    repoSubContentStyle: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
    },
    updateTimeStyle: {
        padding: 5,
    }
};

export default RepoDetails;
