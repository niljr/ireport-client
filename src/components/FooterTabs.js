import React, { Component } from 'react';
import { Container, Button, Text, Icon, Tab, Tabs } from 'native-base';
import PageOne from '../PageOne';
import CreateReport from './createReport';

export default class FooterTabs extends Component {

  render() {
    return (


      <Container>
        <Tabs initialPage={1}>
          <Tab heading="Tab1">
            <PageOne />
          </Tab>
          <Tab heading="Tab2">
            <CreateReport />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
