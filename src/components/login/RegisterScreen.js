import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Container, Text, Header, Content, Button,
  Input, Label, Form, Item, Body, Title, Left, Right} from 'native-base';

import {recordUser} from '../../services/UserService';

export default class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      email:'',
      password: ''
    };
  }

  recordUser () {
    if(this.state.username != '' && this.state.password != ''){
      recordUser(this.state);
      this.props.navigation.navigate('Login');
    }else{
      alert('Senha/Usuário são requeridos')
    }
    
  }

  render() {
    return (
      <Container style={styles.container}>
      <Header>
        <Left />
        <Body>
          <Title>Cadastro</Title>
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
            <Label>E-mail</Label>
            <Input onChangeText={(value) => this.setState({email: value})}/>
          </Item>
          <Item floatingLabel>
            <Label>Senha</Label>
            <Input onChangeText={(value) => this.setState({password: value})}/>
          </Item>
        </Form>
        <Button 
        full 
        light 
        style={styles.button}
        onPress={() => this.recordUser()}>
          <Text>Cadastrar</Text>
        </Button>
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    marginTop: 10
  }
});
