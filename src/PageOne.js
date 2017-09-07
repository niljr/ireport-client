import React, { Component } from 'react';
import { 
  Container, Button, Text, Icon, Tab, Tabs, TabHeading, Header
} from 'native-base';


import ToolBar from './components/ToolBar';
import FooterTabs from './components/FooterTabs';
import Reports from './components/Reports';
import CreateReport from './components/createReport/';
import Profile from './components/profile';

export default class PageOne extends Component {

  goToCreateReport = () => Actions.createReport();  

  render() {
    return (
      <Container>
        <Tabs locked tabBarPosition='bottom' initialPage={0}>
          <Tab heading={ <TabHeading style={{flexDirection: 'column'}}><Icon active name="ios-hammer-outline" /><Text style={{fontSize: 10}}>Reports</Text></TabHeading> }>
            <Reports />
          </Tab>
          <Tab heading={ <TabHeading style={{flexDirection: 'column'}}><Icon active name="ios-add-outline" /><Text style={{fontSize: 10}}>Add Report</Text></TabHeading> }>
            <CreateReport />
          </Tab>
          <Tab heading={ <TabHeading style={{flexDirection: 'column'}}><Icon active name="ios-contact-outline" /><Text style={{fontSize: 10}}>Profile</Text></TabHeading> }>
            <Profile />
          </Tab>
          <Tab heading={ <TabHeading style={{flexDirection: 'column'}}><Icon active name="ios-information-circle-outline" /><Text style={{fontSize: 10}}>Information</Text></TabHeading> }>
            <CreateReport />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}





