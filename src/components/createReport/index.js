import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ToolBar from '../ToolBar';
import Camera from '../camera/';
import { Container, Header, Content, Form, Item, Input, Label, Button , Text, Icon, View, Picker } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import { categories } from '../../config/categories';
import styles from './styles';

export default class CreateReport extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <Container>
        <ToolBar scene='createReport'/>
        <Content padder>
          <Form>
            <Camera />

            <Picker
              mode="dropdown"
              placeholder="Select One"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
              style={styles.picker}
            >
              {
                categories.map((cat, i) => 
                <Item key={i} label={cat.label} value={cat.value} />
                )
              }
            </Picker>

            <Item floatingLabel>
              <Label>Title</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>Short Description</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Location</Label>
              <Input />
            </Item>
            <Button success full style={{ marginTop: 30 }}><Text> Send </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}