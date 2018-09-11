/*
    esse arquivo indexa todas as telas do aplicativo,
    toda tela precisa esta indexada aqui pra ser chamada.
*/ 
import {createStackNavigator} from 'react-navigation';

//tela de atrações turisticas
import AttractionsScreen from './src/components/attractions/AttractionsScreen';

//tela de detalhe
import DetalheScreen from './src/components/detalhe/DetalheScreen';

/* 
    RootStack recebe um React.Component do createStackNavigator
    Assim podemos exporta é utilizar como um component no App.js
*/
const RootStack = createStackNavigator(
    {   //lista de telas
        Attractions: AttractionsScreen,
        Detalhe: DetalheScreen
    },
    {
        //configurações
        initialRouteName: 'Attractions',
        headerMode: 'none'
    }

);

module.exports = RootStack;