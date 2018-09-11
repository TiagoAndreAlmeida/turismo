import React from 'react';
import { View } from 'react-native';

//carregando gerenciador de rota das telas
import RootStack from './Routes';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true //controle pra saber se ja carregou as fonts
    }
  }
  //essa função carrega as fonts utilizadas pelo native-base
  //antes do app iniciar
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    .then( () => {
      this.setState(this.state = {
        isLoading: false //fonts carregadas
      });
    });
  }

  render() {
    //verifica se já carregou as fonts
    if(this.state.isLoading){
      return (
        <View >
        </View>
      );
    }else{
      return (
        <RootStack />
      );
    }
  }
}