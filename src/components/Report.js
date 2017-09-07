import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Title, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, H1, Input, Item } from 'native-base';
import images from '../config/images';
import Comments from './Comments';
import ToolBar from './ToolBar';

const { height, width } = Dimensions.get('window');


export default class Report extends Component {
  render() {
    const { report } = this.props;
    return (
      <Container>
        <ToolBar scene="report"/>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={ images.userLogo } />
                <Body>
                  <Text>{report.name}</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
              <Right>
                <Text>Status</Text><Text note style={{ color: "#00B386" }}>OPEN</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <H1>{report.title}</H1>
                <Image source={{ uri: report.picture }} style={{height: 200, width: 320, flex: 1}}/>
                <Text note>{report.address}</Text>
                <Text style={{ marginTop: 10 }}>
                  {report.message}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button danger>
                  <Icon name="ios-thumbs-down" />
                  <Text>534 </Text>
                </Button>
                <Button>
                  <Icon name="ios-chatbubbles" />
                  <Text>7 Comments</Text>
                </Button>
              </Left>
            </CardItem>
            <CardItem>
            <Item rounded>
              <Icon active name='ios-chatbubbles-outline' />
              <Input placeholder="Comment here" />
            </Item>
            </CardItem>
            <Comments />
          </Card>
        </Content>
      </Container>
    );
  }
}