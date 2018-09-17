import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Container, Text, Header, Content, Button,
   Input, Label, Form, Item, Body, Title, Left, Right} from 'native-base';

import {db} from '../../config/db';

const usersRef = db.ref('/users');

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      users: []
    };
  }

  componentDidMount () {
    usersRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let users = Object.values(data);
      this.setState({
        users: users
      });
      console.log(this.state.users);
    })
  }

  onLogin () {
    this.state.users.map( (value) => {
      if(this.state.username == value.name && this.state.password == value.password){
        this.props.navigation.navigate('Attractions');
      }
    });
  }

  render() {
    return (

      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Turismo</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form style={styles.content}>
            <Item floatingLabel>
              <Label>Usuário</Label>
              <Input onChangeText={(value) => this.setState({username: value})}/>
            </Item>
            <Item floatingLabel>
              <Label>Senha</Label>
              <Input onChangeText={(value) => this.setState({password: value})}/>
            </Item>
          </Form>
          <Button 
          full 
          style={styles.button} 
          onPress={() => this.onLogin()}>
            <Text>Entrar</Text>
          </Button>
          <Button 
          full 
          light 
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Cadastro</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  content: {
    
    
  },
  button:{
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  }

});
