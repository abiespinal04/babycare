import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DayCaresList from '../components/DayCaresList';
import Care from '../components/Register';
const TabNavigator = () =>createBottomTabNavigator({
    List: DayCaresList,
    Register: Care},
    {
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 25,
          },
        },
      });
  
    export default createAppContainer(TabNavigator);