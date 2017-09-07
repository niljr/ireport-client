import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import images from '../config/images';

export default class Comment extends Component {

  render() {
    const { comment } = this.props;
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: comment.picture }} />
        </Left>
        <Body>
          <Text>{comment.name}</Text>
          <Text note>{comment.message}</Text>
        </Body>
        <Right>
          <Text note>3:43pm</Text>
        </Right>
      </ListItem>
    );
  }
}