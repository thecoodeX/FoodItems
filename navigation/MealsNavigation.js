import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Menu from '../screens/Menu';
import Details from '../screens/Details';
import CategoryScreen from '../screens/CategoryScreen';
import Favourites from '../screens/Favourites';
import Filter from '../screens/Filter';

const MealsNavigation = createStackNavigator({
    Menu: Menu,
    Deatails: Details,
    CategoryScreen: CategoryScreen,
    Favourites: Favourites,
    Filter: Filter

}, {
    initialRouteKey: Menu,
    defaultNavigationOptions: {

    }
});


export default createAppContainer(MealsNavigation);