import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';
import { Card, Spinner } from './common';
import { Dropdown } from 'react-native-material-dropdown';
import RepoDetails from './RepoDetails';
import * as localisationData from '../GlobalStrings.json';

class Repositories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gitReposUrl: 'https://api.github.com/users/supreetsingh247/repos',
            isLoading: true,
            reposFilterLangDefault: "All",
            reposSelectedFilterLang: "All",
            reposFilterTypeDefault: "All",
            reposSelectedFilterType: "All",
            reposSearchResCount: 0,
            reposSearchResMessage: '',
            reposObjectList: [],
            reposFilterSearchText: "",
            availTypeList: [{ value: 'All' }, { value: 'Sources' }, { value: 'Forks' }, { value: 'Archives' }, { value: 'Mirrors' }]
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch(this.state.gitReposUrl)
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    reposObjectList: responseJson
                })
            })
            .catch(error => console.log(error))
    };

    setSearchText = async (selectedFilterText) => {
        this.setState({ reposFilterSearchText: selectedFilterText });
    }

    renderRepoList = () => {

        this.state.reposSearchResCount = 0;
        var renderedRepoList = this.state.reposObjectList.map((repoEntry) => {
            var canRender = true;
            //Apply search by text filter.
            if (!(repoEntry.name.toLowerCase().includes(this.state.reposFilterSearchText.toLowerCase())))
                canRender = false;
            //Apply search by language filter.
            if (!(canRender && this.state.reposSelectedFilterLang.includes(this.state.reposFilterLangDefault) ? true : (repoEntry.language != null ? repoEntry.language.includes(this.state.reposSelectedFilterLang) : false)))
                canRender = false;
            //Apply search by type filter
            if (canRender && !this.state.reposSelectedFilterType.includes(this.state.reposFilterTypeDefault)) {
                //1 source
                //2 forks
                //3 archives
                //4 mirrors
                if (this.state.reposSelectedFilterType.includes(this.state.availTypeList[1].value) && !repoEntry.fork == false) {
                    canRender = false;
                }
                else if (this.state.reposSelectedFilterType.includes(this.state.availTypeList[2].value) && !repoEntry.fork == true) {
                    canRender = false;
                }
                else if (this.state.reposSelectedFilterType.includes(this.state.availTypeList[3].value) && !repoEntry.archived == true) {
                    canRender = false;
                }
                else if (this.state.reposSelectedFilterType.includes(this.state.availTypeList[4].value) && !repoEntry.mirror_url != null) {
                    canRender = false;
                }
            }
            if (canRender) {
                this.state.reposSearchResCount++;
                return (
                    <RepoDetails key={repoEntry.updated_at} repoEntry={repoEntry} />
                )
            }
        }
        );
        this.state.reposSearchResMessage = this.state.reposSearchResCount + localisationData.repoFilterResMessage;

        return renderedRepoList;
    }
    onSelectType(reposSelectedType) {
        this.setState({ reposSelectedFilterType: reposSelectedType });
        this.setState({ reposSearchResCount: this.state.reposSearchResCount });
    }
    onSelectLang(reposSelectedLang) {
        this.setState({ reposSelectedFilterLang: reposSelectedLang });
        this.setState({ reposSearchResCount: this.state.reposSearchResCount });
    }

    reposLangDropdownMenuItems = () => {
        var availLangList = [];
        availLangList[availLangList.length] = { value: this.state.reposFilterLangDefault };
        this.state.reposObjectList.map((repoEntry) => {
            if (repoEntry.language != null && availLangList.find((currentVal) => currentVal.value == repoEntry.language) == null)
                availLangList[availLangList.length] = { "value": repoEntry.language };
        })
        return (
            <Dropdown
                label={localisationData.repoFilterLangugeLabel}
                data={availLangList}
                onChangeText={this.onSelectLang.bind(this)}
                value={this.state.reposFilterLangDefault}
                containerStyle={styles.dropBoxStyle}
            />
        )
    }

    reposTypeDropdownMenuItems = () => {
        return (
            <Dropdown
                label={localisationData.repoFilterTypeLabel}
                data={this.state.availTypeList}
                onChangeText={this.onSelectType.bind(this)}
                value={this.state.reposFilterTypeDefault}
                containerStyle={styles.dropBoxStyle}
            />
        )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Spinner />
            )
        }

        return (
            <View style={styles.filtersStyle}>
                <View style={styles.filterViewStyle}>
                    <TextInput
                        placeholderTextColor="grey"
                        style={{
                            backgroundColor: '#E5E1F4',
                            borderRadius: 20,
                            borderColor: 'black',
                            borderWidth: 2,
                            padding: 5,
                            marginTop:5
                        }}
                        defaultValue={this.state.reposFilterSearchText}
                        onChangeText={this.setSearchText.bind(this)}
                        placeholder={localisationData.repoFindTextLabel} />
                    <View style={styles.filtersDropDownStyle}>
                        <View style={styles.dropDown}>
                            {this.reposLangDropdownMenuItems()}
                        </View>
                        <View style={styles.dropDown}>
                            {this.reposTypeDropdownMenuItems()}
                        </View>
                    </View>
                </View>
                <Text style={{ padding: 5, color: 'blue' }}>{this.state.reposSearchResMessage}</Text>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {this.renderRepoList()}
                </ScrollView>
            </View>

        );
    }
};
const styles = {
    dropDown: {
        flex: 1,
        padding: 5,

    },
    contentContainer: {
        justifyContent: 'space-between',
    },
    filtersStyle: {
        flex: 1
    },
    filterViewStyle: {
        flexDirection: 'column'
    },
    filtersDropDownStyle: {
        flexDirection: 'row',
    },
    ActivityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dropBoxStyle: {
        // borderWidth: 1,
        height: 60,
        backgroundColor: '#E5E1F4'
    }
}

export default Repositories; 