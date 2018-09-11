/*
    esse arquivo indexa todas as telas do aplicativo,
    toda tela precisa esta indexada aqui pra ser chamada.
*/ 
import {createStackNavigator} from 'react-navigation';

//tela de atrações turisticas
import AttractionsScreen from './src/components/attractions/AttractionsScreen';

/* 
    RootStack recebe um React.Component do createStackNavigator
    Assim podemos exporta é utilizar como um component no App.js
*/
const RootStack = createStackNavigator(
    {   //lista de telas
        Attractions: AttractionsScreen
    },
    {
        //configurações
        initialRouteName: 'Attractions',
        headerMode: 'none'
    }

);

module.exports = RootStack;