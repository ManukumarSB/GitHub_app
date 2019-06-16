import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import ProfileDetails from './components/ProfileDetails';
import AppNavigator from './AppNavigator';
import { Spinner } from './components/common';

export default class App extends Component {

    constructor(props) {
        super(props);
        const isPortrait = () => {
            const dim = Dimensions.get('screen');
            return dim.height >= dim.width;
        };

        this.state = {
            profileData: '',
            gitProfileUrl: 'https://api.github.com/users/supreetsingh247',
            isLoading: true,
            orientation: isPortrait() ? 'portrait' : 'landscape'
        };

        // Event Listener for orientation changes
        Dimensions.addEventListener('change', () => {
            this.setState({
                orientation: isPortrait() ? 'portrait' : 'landscape'
            });
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch(this.state.gitProfileUrl)
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    profileData: responseJson
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any
    };

    render() {
        if (this.state.isLoading) {
            return (
                <Spinner />
            )
        }
        return (
            <View style={{ flex: 1, flexDirection: this.state.orientation === 'portrait' ? 'column' : 'row' }}>
                <ProfileDetails profileData={this.state.profileData} orientaion={this.state.orientation} />
                <AppNavigator />
            </View>
        );
    }
}

