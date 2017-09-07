import React, { Component } from 'react';
import {
  Container,
  Content,
  Thumbnail,
  Body,
  Text,
  Tabs,
  Tab
} from 'native-base';
import styles from './styles';
import images from '../../config/images';
import ToolBar from '../ToolBar';
import ProfileComments from '../profileComments';
import ProfileReports from '../profileReports';


export default class Profile extends Component {

  render() {
    return (
      <Container>
        <Content>
          <ToolBar scene='profile' />
          <Thumbnail source={ images.userLogo }  style={styles.thumbnail}/>
          <Body>
            <Text>Mirriam</Text>
            <Text note>mirriam@gmail.com</Text>
          </Body>
          <Tabs initialPage={0} style={styles.tabs}>
            <Tab heading="Comments">
              <ProfileComments />
            </Tab>
            <Tab heading="Reports">
              <ProfileReports />
            </Tab>
        </Tabs>
        </Content>
      </Container>
    );
  }
}
