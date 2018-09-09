import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

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
        <View style={styles.container}>
        </View>
      );
    }else{
      return (
        <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
