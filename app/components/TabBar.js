import { createBottomTabNavigator } from 'react-navigation';
import Repositories from './Repositories';
import * as localisationData from '../GlobalStrings.json';
import Overview from './Overview';
import Projects from './Projects';
import Stars from './Stars';
import Followers from './Followers';
import Following from './Following';

const TabBar = createBottomTabNavigator({
    Overview: Overview,
    Repositories: Repositories,
    Projects: Projects,
    Stars: Stars,
    Followers: Followers,
    Following: Following,

},
    {
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'white',
            inactiveBackgroundColor: 'grey',
            labelStyle: {
                fontSize: 12,
                marginBottom: 15
            },
            style: {
                backgroundColor: 'white',
            },
        },
    });

export default TabBar;