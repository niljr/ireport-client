import React, { Component } from 'react';
import { Header, Left, Button, Right, Body, Icon, Title, Drawer  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SideBarFilter from './sideBarFilter';
export default class ToolBar extends Component {

  render() {
    return (
      <Header>
        {this.renderLeft()}
        {this.renderBody()}
        {this.renderRight()}
      </Header>
    );
  }
  
  renderBody() {
    switch(this.props.scene) {
      case "reports":
        return (
          <Body>
           <Title>Reports</Title>
          </Body>
        )
        break;
      case "report":
        return (
          <Body>
            <Title>Report</Title>
          </Body>
        )
        break;
      case "createReport":
        return (
          <Body>
            <Title>Create Report</Title>
          </Body>
        )
        break;
      case "profile":
        return (
          <Body>
           <Title>Profile</Title>
          </Body>
        )
        break;
    } 
  }

  renderLeft() {
    switch(this.props.scene) {
      case 'reports':
        return(
          <Left >
            <Icon name="ios-search-outline" style={{ color:'white' }} />
          </Left>
        )
        break;
      case 'report':
        return(
            <Left>
              <Button onPress={()=> Actions.pop()} transparent>
                <Icon name='ios-arrow-back-outline'/>
              </Button>
            </Left>
        )
        break;
      case 'createReport':
        return(
            <Left>
              <Button onPress={()=> Actions.pop()} transparent>
                <Icon name='ios-arrow-back-outline'/>
              </Button>
            </Left>
        )
        break;
      case 'profile':
        return(
            <Left>
              <Button onPress={()=> Actions.pop()} transparent>
                <Icon name='ios-arrow-back-outline'/>
              </Button>
            </Left>
        )
        break;
    }
  }

  renderRight() {
    switch(this.props.scene) {
      case 'reports':
        return(
            <Right>
              <Button transparent>
                <Icon name='ios-map-outline'/>
              </Button>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon name='md-funnel'/>
              </Button>
            </Right>
        )
        break;

        case 'report':
        return(
          <Right>
            <Button transparent>
              <Icon name='share'/>
            </Button>
          </Right>
        )
        break;
        
        case 'createReport':
        return(
          <Right />
        )
        break;
    }
  }
}