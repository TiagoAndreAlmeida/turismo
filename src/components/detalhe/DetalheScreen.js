import React, {Component} from 'react';
import {Image, FlatList, View} from 'react-native';
import {Container, Header, Title, Right, Card, CardItem, Left, Body, Content, Text, Button, Icon} from 'native-base'

export default class DetalheScreen extends Component {
  render () {
    const item = this.props.navigation.getParam('item', 'Erro');
   
    return (
      
      <Container>
          <Header>
            <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={() => this.props.navigation.pop()} />
            </Button>
            </Left>
            <Body>
              <Title>Detalhes</Title>
            </Body>
            <Right/>
          </Header>

          <Content>
            <Card style={{flex: 0}}>
              <CardItem bordered>
                  <Body>
                    <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 23}}>{item.title}</Text>
                  </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Image source={{uri: item.uri }} style={{height: 300, width: 325, flex: 1}}/>
                </Body>
              </CardItem>
              <CardItem bordered>
              <Body>
                <Text>
                  <Icon name="compass"/> Localização: {item.localizacao}</Text>
                <Text>
                  <Icon name="grid"/> Sobre: {item.descib}</Text>
                <Text>
                  <Icon name="apps"/> Tipo: {item.tipo}</Text>
                <Text>
                  <Icon name="navigate"/> Cidade: {item.cidade}</Text>
                <Text>
                  <Icon name="map"/> CEP: {item.cep}</Text>
              </Body>
              </CardItem>            
            </Card>
          </Content>
    </Container>
    )
    
  }
}

