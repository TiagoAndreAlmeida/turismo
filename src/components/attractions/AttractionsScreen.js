import React, {Component} from 'react';
import {Image, FlatList, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Container, Header, Title, Right, Card, CardItem, Left, Body, Content, Text} from 'native-base';

const data = require('../../../pontos.json');
export default class AttractionsScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
      return (
        <Container >
          <Header>
            <Left/>
            <Body>
              <Title>Atrações</Title>
            </Body>
            <Right />
          </Header>

          <Content>
            <FlatList
            data={data}
            keyExtractor={item => item.title}
            renderItem={({item}) => 
            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{item.title}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.push(
                    'Detalhe', {
                      item: item
                    }
                  )}>
                    <Image source={{uri: item.uri }} style={{height: 200, width: 325, flex: 1}}/>
                  </TouchableWithoutFeedback>
                </Body>
              </CardItem>
            </Card> }
            />
          </Content>
        </Container>
      );
    }
}