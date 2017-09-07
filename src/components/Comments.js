import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import Comment from './Comment';
import images from '../config/images';
import sampleComments from '../../json/comments';

export default class Comments extends Component {

  state = {
      comments: sampleComments
  };



  render() {
    return (
      <List>
        {
            this.state.comments.map(comment => <Comment key={comment._id} comment={comment} />)
        }
      </List>
    );
  }
}