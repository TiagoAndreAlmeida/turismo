//import React, {Components} from 'react';
import {createStackNavigator} from 'react-navigation';

import AttractionsScreen from './src/components/attractions/AttractionsScreen';

const RootStack = createStackNavigator(
    {
        Attractions: AttractionsScreen
    },
    {
        initialRouteName: 'Attractions',
        headerMode: 'none'
    }

);

module.exports = RootStack;