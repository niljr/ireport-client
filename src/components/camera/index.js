import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Button, Icon } from 'native-base'
import styles from './styles';

export default class Camera extends Component {
  
  constructor() {
    super();
    this.state = {
      avatarSource: null
    }
  }
  

  cameraImage() {
    
      var options = {
        title: 'Select Avatar',
        customButtons: [
          {name: 'fb', title: 'Choose Photo from Facebook'},
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      };
    ImagePicker.showImagePicker( (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
    
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    return (
    <View>
      <TouchableOpacity onPress={() => this.cameraImage()}>
      {
        this.state.avatarSource  ? <Image source={this.state.avatarSource} style={styles.image} />
        : <Icon name='ios-camera-outline' style={styles.camera}/>
      }
      </TouchableOpacity>
    </View>
    );
  }
}