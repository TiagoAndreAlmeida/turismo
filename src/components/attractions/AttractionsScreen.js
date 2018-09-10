import React, {Component} from 'react';
import {Image, FlatList} from 'react-native';
import {Container, Header, Title, Right, Card, CardItem, Left, Body, Content, Text} from 'native-base';

const data = require('../../../pontos.json');
export default class AttractionsScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/CHAPADA_DO_ARARIPE_01.jpg/300px-CHAPADA_DO_ARARIPE_01.jpg",
            title: "Chapada do Araripe",
            descib: "Localizada ao Sul no Estado, na região do Cariri, a Chapada do Araripe se encontra na divisa entre o Ceará e Pernambuco e é uma reserva ecológica que reúne fontes naturais, grutas e sítios paleontológicos"
        }
    }
    render() {
      return (
        <Container>
          <Header>
            <Left/>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>

          <Content>
            <FlatList
            data={data}
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
                  <Image source={{uri: item.uri }} style={{height: 200, width: 350, flex: 1}}/>
                  <Text>
                    {item.descib}
                  </Text>
                </Body>
              </CardItem>
            </Card> }
            />
          </Content>
        </Container>
      );
    }
}