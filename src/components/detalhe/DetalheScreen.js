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
            <Card style={{flex: 0}} >
              <CardItem bordered>
                  <Body>
                    <Text>{item.title}</Text>
                  </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Image source={{uri: item.uri }} style={{height: 200, width: 350, flex: 1}}/>
                </Body>
              </CardItem>
              <CardItem bordered>
              <Body>
                <Text>
                  <Icon name="compass"/> Localização: {item.localizacao}</Text>
                <Text>
                  <Icon name="grid"/> Sobre: {item.descib}</Text>
              </Body>
              </CardItem>            
            </Card>
          </Content>
    </Container>
    )
  }
}