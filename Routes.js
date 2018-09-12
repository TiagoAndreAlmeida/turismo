/*
    esse arquivo indexa todas as telas do aplicativo,
    toda tela precisa esta indexada aqui pra ser chamada.
*/ 
import {createStackNavigator} from 'react-navigation';

//tela de atrações turisticas
import AttractionsScreen from './src/components/attractions/AttractionsScreen';

//tela de detalhe
import DetalheScreen from './src/components/detalhe/DetalheScreen';

//Tela de Login
import LoginScreen from './src/components/login/LoginScreen';

//Tela de Registro
import RegisterScreen from './src/components/login/RegisterScreen';

/* 
    RootStack recebe um React.Component do createStackNavigator
    Assim podemos exporta é utilizar como um component no App.js
*/
const RootStack = createStackNavigator(
    {   //lista de telas
        Attractions: AttractionsScreen,
        Detalhe: DetalheScreen,
        Login: LoginScreen,
        Register: RegisterScreen
    },
    {
        //configurações
        initialRouteName: 'Login',
        headerMode: 'none'
    }

);

module.exports = RootStack;