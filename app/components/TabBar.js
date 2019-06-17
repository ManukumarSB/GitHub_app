import { createMaterialTopTabNavigator } from 'react-navigation';
import Repositories from './Repositories';
import * as localisationData from '../GlobalStrings.json';
import Overview from './Overview';
import Projects from './Projects';
import Stars from './Stars';
import Followers from './Followers';
import Following from './Following';

const TabBar = createMaterialTopTabNavigator({
    Overview: Overview,
    Repositories: Repositories,
    Projects: Projects,
    Stars: Stars,
    Followers: Followers,
},
    {
        tabBarOptions: {
            activeTintColor: 'black',
            // inactiveTintColor: 'white',
            inactiveBackgroundColor: 'white',
            upperCaseLabel:false,
            labelStyle: {
                fontSize: 12,
                // marginBottom: 15
            },
            style: {
                backgroundColor: 'grey',
                height: '10%'
            },
        },
    });

export default TabBar;