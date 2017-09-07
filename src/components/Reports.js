import React, { Component } from 'react';
import { Image, TouchableHighlight, Dimensions, View } from 'react-native';
import { 
  Container,
  Content, 
  Card, 
  CardItem, 
  Thumbnail, 
  Body, 
  Left,
  Button, 
  Right, 
  Text, 
  Icon, 
  Grid, 
  Col, 
  Row, 
  List,
  ListItem, 
  H2,
  Fab,
  Drawer,
} from 'native-base';

import { Actions } from 'react-native-router-flux';
import images from '../config/images';
import ToolBar from './ToolBar';
import Report from './Report';
import sampleReports from '../../json/reports';

const { height, width } = Dimensions.get('window');


export default class Reports extends Component {

  state = {
    active: 'true',
    reports: sampleReports
  };

  goToReport = (report) => Actions.report({report:report});

  render() {
    return (
      <Container>
      <ToolBar scene='reports'/>
      <Content>
        <Card>
          <H2>Trending Issue</H2>
          <CardItem cardBody>
            <TouchableHighlight onPress={() => this.goToReport(this.state.reports)}>
              <Image source={ images.reportImage } style={{height: 200, width: width, flex: 1}} />
            </TouchableHighlight>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Dugay dugay na!</Text>
            </Left>
          </CardItem>
        </Card>
        <H2>Other Issues</H2>
        <View style={{  flexWrap: 'wrap', flexDirection: 'row' }}>
          {
            this.state.reports.map(report => 
              <ListItem 
                key={report._id}
                style={{height: 150, width: width / 2.4, flexDirection: 'column'}}
              > 
                <TouchableHighlight onPress={()=>this.goToReport(report)}>
                  <Image source={{ uri: report.picture }} style={{height: 150, width: 170, flex: 1}} />
                </TouchableHighlight>
                  <Text style={{fontSize: 12}}>{report.title}</Text>
              </ListItem>
            )
          }
        </View>
      </Content>
      </Container>
    );
  }
}