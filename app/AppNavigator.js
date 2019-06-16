import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import TabBar from './components/TabBar'

const Navigator = createStackNavigator({
    // App: {
    //     screen: App,
    //     navigationOptions: {
    //         title: 'Home',
    //         header: null
    //       },
    // },
    TabBar: {
        screen: TabBar,
        navigationOptions: {
            title: 'Home',
            header: null 
        },
    }

});

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;


