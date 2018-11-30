import React, { Component } from 'react';
import { Container, Header, Content, List } from 'native-base';

import ViewList from './app/ViewList';

export default class ListExample extends Component {
  data = [
    'Arief',
    'Yusron'
  ]

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            {this.data.map((data,key)=> <ViewList key={key} data={data} />)}
          </List>
        </Content>
      </Container>
    );
  }
}