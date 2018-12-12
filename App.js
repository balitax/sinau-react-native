/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Container, Icon, Header, Left, Body, Right, Button, Title } from 'native-base';
import MainScreen from './src/components/MainScreen';

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
            <Left>
              <Button transparent>
                <Icon ios='ios-menu' android="md-menu" style={{fontSize: 33, color: '#999'}} />
              </Button>
            </Left>
            <Body>
                <Title>APP DOT</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon ios='ios-share' android='md-share' style={{fontSize: 33, color: '#999'}} />
              </Button>
            </Right>
        </Header>
        <MainScreen />
      </Container>
    );
  }
}

export default App;